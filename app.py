# -*- coding: utf-8 -*-
import os
import json
import datetime
import pandas as pd
import dash
import dash_finnhub as dfp
import dash_core_components as dcc
import dash_html_components as html
from dash.exceptions import PreventUpdate
from dash.dependencies import Input, Output, State
from dotenv import load_dotenv
from flask import Flask, session
from flask_cors import CORS
from secure import SecureHeaders
from api import DataProvider
from figure import get_fig
from flask_socketio import SocketIO, send
from data import us_symbols, ca_symbols
from util import parse_closed_quote, parse_open_quote

load_dotenv()

############################
# Flask Instantiation
############################

server = Flask(__name__, static_url_path="")
server.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
server.config["DEBUG"] = True
server.config["CORS_HEADERS"] = "Content-Type"

secure_headers = SecureHeaders()


@server.after_request
def set_secure_headers(response):
    secure_headers.flask(response)
    return response


socketio = SocketIO(
    server, async_mode=None, engineio_logger=True, cors_allowed_origins="*",
)

############################
# Dash Instantiation
############################

external_scripts = [
    {
        "src": "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        "integrity": "sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=",
        "crossorigin": "anonymous",
    },
    {
        "src": "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js",
        "integrity": "sha256-yr4fRk/GU1ehYJPAs8P4JlTgu0Hdsp4ZKrx8bDEDC3I=",
        "crossorigin": "anonymous",
    },
]

app = dash.Dash(
    # Set async mode variable to "threading", "eventlet" or "gevent" to choose
    # different async modes, or leave it set to None for the app to choose
    # the best option based on installed packages.
    __name__,
    meta_tags=[{"name": "viewport", "content": "width=device-width"}],
    server=server,
    external_scripts=external_scripts,
)

cors = CORS(server, resources={r"/": {"origins": ""}})


############################
# Default symbols & metrics
############################

default_symbols = ["SPY", "QQQ", "DIA", "IWM"]

valuation = {
    "marketCapitalization": "Market Cap",
    "peNormalizedAnnual": "P/E (Normalized)",
    "psAnnual": "Price/Sales",
    "pbAnnual": "Price/Book (Annu)",
    "pbQuarterly": "Price/Book (Qtly)",
}

trading = {
    "beta": "Beta",
    "52WeekHigh": "52 Week High",
    "52WeekLow": "52 Week Low",
    "52WeekPriceReturnDaily": "52 Week Change (1Y Daily)",
    "3MonthAverageTradingVolume": "3 Month Avg Volume",
}

financials = {
    "revenuePerShareAnnual": "Revenue Per Share (Annu)",
    "revenuePerShareTTM": "Revenue Per Share (TTM)",
    "netProfitMarginAnnual": "Net Profit Margin (Annu)",
    "netProfitMarginTTM": "Net Profit Margin (TTM)",
    "epsNormalizedAnnual": "Earnings Per Share (Annu)",
}


############################
# SocketIO handlers
############################


@socketio.on("connect")
def handle_connect() -> None:
    session.permanent = True
    send("connected")


############################
# Loading all stock symbols
############################


df_us_symbols = pd.DataFrame(us_symbols)
df_ca_symbols = pd.DataFrame(ca_symbols)
all_symbols = df_us_symbols.append(df_ca_symbols, ignore_index=True)


############################
# Dash child elements
############################


# returns a left panel row
def get_row(ticker):
    return html.Div(
        id=ticker + "summary",
        className="summary",
        children=[
            html.P(ticker, id=ticker + "name", className="three-col"),
            html.P(0, id=ticker + "price", className="three-col"),
            html.P("(0.00%)", id=ticker + "change", className="three-col"),
            # Contents
            html.Div(
                id=ticker + "contents",
                className="row details display-none",
                children=[
                    # Button to display ticker figure in main chart
                    html.Div(
                        className="button-buy-sell-chart-right",
                        children=[
                            html.Button(
                                id=ticker + "Button_chart",
                                children="Chart",
                                n_clicks=0,
                            )
                        ],
                    ),
                ],
            ),
        ],
    )


# color of price output
def get_color(a, b):
    if a == b:
        return "white"
    elif a > b:
        return "#45df7e"
    else:
        return "#da5657"


# returns chart div
def chart_div():
    return html.Div(
        id="graph_div",
        className="row card",
        children=[
            # Chart Top Bar
            html.Div(
                className="row chart-top-bar",
                children=[
                    dcc.Dropdown(
                        id="chart_type",
                        className="graph-top-left inline-block",
                        options=[
                            {
                                "label": "candlestick",
                                "value": "candlestick_trace",
                            },
                            {"label": "line", "value": "line_trace"},
                            {"label": "mountain", "value": "area_trace"},
                            {"label": "bar", "value": "bar_trace"},
                            {
                                "label": "colored bar",
                                "value": "colored_bar_trace",
                            },
                        ],
                        value="colored_bar_trace",
                        clearable=False,
                        style={},
                    ),
                    dcc.Dropdown(
                        id="studies",
                        className="graph-top-left inline-block",
                        options=[
                            {
                                "label": "ACC/D",
                                "value": "accumulation_trace",
                                "title": "Accumulation/D",
                            },
                            {
                                "label": "BOL",
                                "value": "bollinger_trace",
                                "title": "Bollinger bands",
                            },
                            {
                                "label": "MA",
                                "value": "moving_average_trace",
                                "title": "Moving Average",
                            },
                            {
                                "label": "EMA",
                                "value": "e_moving_average_trace",
                                "title": "Exponential Moving Average",
                            },
                            {
                                "label": "CCI",
                                "value": "cci_trace",
                                "title": "Commodity Channel Index",
                            },
                            {
                                "label": "ROC",
                                "value": "roc_trace",
                                "title": "Price rate of change",
                            },
                            {
                                "label": "PP",
                                "value": "pp_trace",
                                "title": "Pivot points",
                            },
                            {
                                "label": "STO",
                                "value": "stoc_trace",
                                "title": "Stochastic oscillator",
                            },
                            {
                                "label": "MOM",
                                "value": "mom_trace",
                                "title": "Momentum Indicator",
                            },
                        ],
                        placeholder="studies...",
                        value=[],
                        multi=True,
                        style={},
                    ),
                    # Dropdown and close button float right
                    html.Div(
                        className="graph-top-right inline-block",
                        children=[
                            html.Div(
                                className="inline-block",
                                children=[
                                    dcc.Dropdown(
                                        className="dropdown-period",
                                        id="dropdown_period",
                                        options=[
                                            {"label": "1 min", "value": 1},
                                            {"label": "5 min", "value": 5},
                                            {"label": "15 min", "value": 15},
                                            {"label": "30 min", "value": 30},
                                            {"label": "1 day", "value": "D"},
                                        ],
                                        value=5,
                                        clearable=False,
                                    )
                                ],
                            ),
                            html.Span(
                                id="graph_close",
                                className="chart-close inline-block float-right",
                                children="×",
                                n_clicks=0,
                            ),
                        ],
                    ),
                ],
            ),
            # Graph div
            html.Div(
                dcc.Graph(
                    id="chart",
                    className="chart-graph",
                    config={"displayModeBar": False, "scrollZoom": True},
                )
            ),
        ],
    )


# returns modal (not in use)
def modal(ticker):
    return html.Div(
        id=ticker + "modal",
        className="modal",
        style={"display": "none"},
        children=[
            html.Div(
                className="modal-content",
                children=[
                    html.Span(
                        id=ticker + "closeModal",
                        className="modal-close",
                        children="×",
                    ),
                    html.P(id="modal" + ticker, children=ticker),
                    # row div with two div
                    html.Div(
                        className="row",
                        children=[
                            # graph div
                            html.Div(
                                className="six columns",
                                children=[
                                    dcc.Graph(
                                        id=ticker + "modal_graph",
                                        config={"displayModeBar": False},
                                    )
                                ],
                            ),
                        ],
                    ),
                ],
            )
        ],
    )


############################
# Dash Main Layout
############################


# Dash layout div
app.layout = html.Div(
    className="row",
    children=[
        # Interval component for live clock
        dcc.Interval(id="interval", interval=1 * 1000, n_intervals=0),
        # Interval component for left panel updates
        dcc.Interval(id="i_bis", interval=1 * 30000, n_intervals=0),
        # Interval component for graph updates
        dcc.Interval(id="i_tris", interval=1 * 30000, n_intervals=0),
        # Streaming data provider for price updates
        dfp.StreamingProvider(
            id="streaming-provider",
            data=json.dumps({"symbols": default_symbols}),
            label=os.getenv("FINNHUB_API_KEY"),
            value="",
        ),
        html.Div(
            className="three columns div-left-panel",
            children=[
                # Div for Left Panel App Info
                html.Div(
                    className="div-info",
                    children=[
                        html.Img(
                            className="logo",
                            src=app.get_asset_url("dash-logo-new.png"),
                        ),
                        html.H6(className="title-header", children="STONKS"),
                        html.P(
                            """
                            Rob Little
                            digitalwave@protonmail.ch
                            """
                        ),
                        dcc.Dropdown(
                            id="ticker-search",
                            className="card",
                            placeholder="Search ticker...",
                            value="SPY",
                            style={"marginTop": 40},
                        ),
                    ],
                ),
                # Ask Bid Currency Div
                html.Div(
                    className="div-currency-toggles",
                    children=[
                        html.P(
                            id="live_clock",
                            className="three-col",
                            children=datetime.datetime.now().strftime(
                                "%H:%M:%S"
                            ),
                        ),
                        html.P(className="three-col", children="Price"),
                        html.P(className="three-col", children="Change"),
                        html.Div(
                            className="row",
                            n_clicks=0,
                            children=[
                                get_row(ticker) for ticker in default_symbols
                            ],
                        ),
                    ],
                ),
            ],
        ),
        # Right Panel Div
        html.Div(
            className="nine columns div-right-panel",
            children=[
                html.Div(
                    className="row",
                    children=[
                        html.H5(id="ticker-header"),
                        html.H2(id="ticker-price"),
                    ],
                ),
                # Charts Div
                html.Div(
                    id="charts", className="row", children=[chart_div()],
                ),
                html.Div(
                    id="bottom_panel",
                    className="row three-columns div-bottom-panel card",
                    children=[
                        html.Details(
                            id="ticker_data",
                            open="open",  # or None
                            children=[
                                html.Summary(children="Summary"),
                                html.Div(
                                    style={"paddingBottom": 20},
                                    children=[
                                        html.H6(
                                            className="three-col",
                                            children="Valuation Measures",
                                        ),
                                        html.H6(
                                            className="three-col",
                                            children="Trading Information",
                                        ),
                                        html.H6(
                                            className="three-col",
                                            children="Financial Highlights",
                                        ),
                                    ],
                                ),
                                html.Div(id="stock_fundamentals", children=""),
                            ],
                        ),
                    ],
                ),
                html.Div(id="news_panel", children=[],),
            ],
        ),
        html.Div(id="current_ticker", style={"display": "none"}),
    ],
)


############################
# Left panel callbacks
############################


# Generate Buy/Sell and Chart Buttons for Left Panel
def generate_contents_for_left_panel():
    def show_contents(n_clicks):
        if n_clicks is None:
            return "display-none", "row summary"
        elif n_clicks % 2 == 0:
            return "display-none", "row summary"
        return "row details", "row summary-open"

    return show_contents


# Callback to reset left panel click counts
@app.callback(
    [
        Output(ticker + "Button_chart", "n_clicks")
        for ticker in default_symbols
    ],
    [Input("current_ticker", "className")],
)
def reset_click_callback(symbol):
    if not symbol:
        raise PreventUpdate

    return tuple(0 for button_name in default_symbols)


# Callback to update live clock
@app.callback(
    Output("live_clock", "children"), [Input("interval", "n_intervals")]
)
def update_time(n):
    return datetime.datetime.now().strftime("%H:%M:%S")


# Generate live or closed prices for left panel
def generate_price_for_left_panel(ticker):
    def price_for_left_panel(n_i, value):
        symbol = ticker
        caller = dash.callback_context.triggered[0]["prop_id"].split(".")[0]

        # handle streaming provider input
        if caller == "streaming-provider":
            if not value or symbol not in default_symbols:
                raise PreventUpdate

            stock, price = value.split(",")  # "SPY, 340.24"
            # price = int(price)
            # last_close = session["active_prev_close"]
            # sign, amt, chg = parse_open_quote(stock, last_close)
            # state = f"{stock}: {price} {sign}{amt} ({sign}{chg}%)"
            # description = session["active_desc"]
            # return state, description
            return 335.17, "+1.32 (+1.5%)"

        elif caller == "i_bis":
            # handle closed price n_i interval callback
            stock = DataProvider(symbol)
            data = stock.quote()
            close, last_close, sign, amt, chg = parse_closed_quote(data)
            session["active_prev_close"] = last_close
            return close, f"{sign}{amt} ({sign}{chg}%)"
            # return 335.16, "+1.32 (+1.5%)"

        else:
            return 0.00, "0 (0.00%)"

    return price_for_left_panel


# Loop through symbols and generate symbol specific callbacks
for ticker in default_symbols:
    app.callback(
        [
            Output(ticker + "contents", "className"),
            Output(ticker + "summary", "className"),
        ],
        [Input(ticker + "summary", "n_clicks")],
    )(generate_contents_for_left_panel())

    app.callback(
        [
            Output(ticker + "price", "children"),
            Output(ticker + "change", "children"),
        ],
        [Input("i_bis", "n_intervals")],
        [Input("streaming-provider", "value")],
    )(generate_price_for_left_panel(ticker))


############################
# Search & Chart callbacks
############################


@app.callback(
    [Output("current_ticker", "className"), Output("ticker-search", "value")],
    [Input(ticker + "Button_chart", "n_clicks") for ticker in default_symbols],
)
def chart_button_callback(*args):
    symbol = default_symbols[0]  # default to SPY on page load
    for i in range(len(default_symbols)):
        if args[i] > 0:
            symbol = default_symbols[i]
            session["active"] = symbol
            session["active_desc"] = all_symbols[
                all_symbols["symbol"] == symbol
            ]["description"].to_string(index=False)

    if not symbol:
        raise PreventUpdate

    return symbol, symbol


# Callback for Search Input for Left Panel
@app.callback(
    Output("ticker-search", "options"),
    [Input("ticker-search", "search_value")],
)
def update_options(symbol):
    if not symbol:
        raise PreventUpdate

    df = all_symbols[all_symbols["symbol"].str.contains(f"{symbol}", na=False)]

    options = [
        {"label": row[3], "value": row[3], "title": f"{row[4]}: {row[1]}"}
        for row in df.itertuples(index=False, name=None)
    ]
    return options


# Callback to return chart figure on chart change
@app.callback(
    Output("chart", "figure"),
    [
        Input("i_tris", "n_intervals"),
        Input("dropdown_period", "value"),
        Input("chart_type", "value"),
        Input("studies", "value"),
        Input("ticker-search", "value"),
    ],
    [State("chart", "figure")],
)
def chart_fig_callback(n_i, p, t, s, s_val, old_fig):
    print("updating chart for current ticker {}".format(s_val))
    if s_val is None:
        return {"layout": {}, "data": {}}

    if old_fig is None or old_fig == {"layout": {}, "data": {}}:
        return get_fig(s_val, t, s, p)

    fig = get_fig(s_val, t, s, p)
    return fig


# Callback to update current ticker and price
@app.callback(
    [Output("ticker-price", "children"), Output("ticker-header", "children")],
    [Input("ticker-search", "value"), Input("streaming-provider", "value")],
)
def update_current_ticker(symbol, value):
    caller = dash.callback_context.triggered[0]["prop_id"].split(".")[0]

    if caller == "streaming-provider":
        if not value:
            raise PreventUpdate

        stock, price = value.split(",")  # "SPY, 340.24"
        if stock not in default_symbols or stock == session["active"]:
            price = int(price)
            last_close = session["active_prev_close"]
            sign, amt, chg = parse_open_quote(stock, last_close)
            state = f"{stock}: {price} {sign}{amt} ({sign}{chg}%)"
            description = session["active_desc"]
            return state, description

        else:
            raise PreventUpdate

    if caller == "ticker-search":
        if not symbol:
            raise PreventUpdate

        session["active"] = symbol
        session["active_desc"] = all_symbols[all_symbols["symbol"] == symbol][
            "description"
        ].to_string(index=False)

        stock = DataProvider(symbol)
        quote = stock.quote()
        close, last_close, sign, amt, chg = parse_closed_quote(quote)
        session["active_prev_close"] = last_close
        state = f"{symbol}: {close} {sign}{amt} ({sign}{chg}%)"
        description = session["active_desc"]
        return state, description

    return None


# Callback to return stock fundamental data on bottom Panel
@app.callback(
    Output("stock_fundamentals", "children"),
    [Input("ticker-search", "value"), Input("current_ticker", "children")],
)
def update_fundamentals(s_val, c_val):
    symbol = s_val or c_val

    if not symbol:
        raise PreventUpdate

    children = []
    stock = DataProvider(symbol)
    data = stock.financials()

    if data and len(data["metric"].keys()):
        for column in [valuation, trading, financials]:
            children.append(
                html.P(
                    className="three-col",
                    style={"fontSize": "1.3rem"},
                    children=[
                        html.P(
                            f"{column[row]}: {data['metric'][row]}",
                            style={"paddingBottom": 10},
                        )
                        for row in column.keys()
                    ],
                ),
            )
    else:
        children = [
            html.P("no data available", className="three-col")
            for i in range(3)
        ]

    return children


# Callback to return recent stock news on bottom Panel
@app.callback(
    Output("news_panel", "children"),
    [Input("ticker-search", "value"), Input("current_ticker", "children")],
)
def update_news(s_val, c_val):
    symbol = s_val or c_val

    if not symbol:
        raise PreventUpdate

    children = []
    stock = DataProvider(symbol)
    news_items = stock.latest_news()

    if news_items:
        for article in news_items:
            # date = datetime.datetime.utcfromtimestamp(article["datetime"])
            children.append(
                html.Div(
                    id=f"news_item_{article['id']}",
                    className="row three-columns div-bottom-panel card",
                    children=[
                        html.Img(
                            className="three-col float-left",
                            src=article["image"],
                            width="33%",
                        ),
                        dcc.Link(
                            href=article["url"],
                            target="_blank",
                            children=[
                                html.H5(
                                    article["headline"],
                                    className="float-left headline",
                                )
                            ],
                        ),
                    ],
                )
            )

    return children


if __name__ == "__main__":
    socketio.run(
        server, debug=False, use_reloader=True, port=5000, host="0.0.0.0"
    )
