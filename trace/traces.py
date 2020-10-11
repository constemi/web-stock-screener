import pandas as pd
import plotly.graph_objs as go


# Volume trace
def volume_trace(df):
    trace = go.Bar(
        x=df.index,
        y=[str(x) for x in df["v"].to_list()],
        orientation="v",
        xaxis="x",
        yaxis="y",
        visible=True,
        showlegend=False,
        name="VOL",
    )
    return trace


# STUDIES TRACES


# Moving average
def moving_average_trace(df, fig):
    df2 = df["c"].rolling(window=5).mean()
    trace = go.Scatter(
        x=df2.index,
        y=df2,
        mode="lines",
        showlegend=False,
        name="MA",
        line={"width": 1},
    )
    fig.append_trace(trace, 1, 1)  # plot in first row
    return fig


# Exponential moving average
def e_moving_average_trace(df, fig):
    df2 = df["c"].rolling(window=20).mean()
    trace = go.Scatter(
        x=df2.index,
        y=df2,
        mode="lines",
        showlegend=False,
        name="EMA",
        line={"width": 1},
    )
    fig.append_trace(trace, 1, 1)  # plot in first row
    return fig


# Bollinger Bands
def bollinger_trace(df, fig, window_size=10, num_of_std=5):
    price = df["c"]
    rolling_mean = price.rolling(window=window_size).mean()
    rolling_std = price.rolling(window=window_size).std()
    upper_band = rolling_mean + (rolling_std * num_of_std)
    lower_band = rolling_mean - (rolling_std * num_of_std)

    trace = go.Scatter(
        x=df.index,
        y=upper_band,
        mode="lines",
        showlegend=False,
        name="BB_upper",
        line={"width": 1},
    )

    trace2 = go.Scatter(
        x=df.index,
        y=rolling_mean,
        mode="lines",
        showlegend=False,
        name="BB_mean",
        line={"width": 1},
    )

    trace3 = go.Scatter(
        x=df.index,
        y=lower_band,
        mode="lines",
        showlegend=False,
        name="BB_lower",
        line={"width": 1},
    )

    fig.append_trace(trace, 1, 1)  # plot in first row
    fig.append_trace(trace2, 1, 1)  # plot in first row
    fig.append_trace(trace3, 1, 1)  # plot in first row
    return fig


# Accumulation Distribution
def accumulation_trace(df):
    df["volume"] = ((df["c"] - df["l"]) - (df["h"] - df["c"])) / (
        df["h"] - df["l"]
    )
    trace = go.Scatter(
        x=df.index,
        y=df["volume"],
        mode="lines",
        showlegend=False,
        name="Accumulation",
        line={"width": 1},
    )
    return trace


# Commodity Channel Index
def cci_trace(df, ndays=5):
    TP = (df["h"] + df["l"] + df["c"]) / 3
    CCI = pd.Series(
        (TP - TP.rolling(window=10, center=False).mean())
        / (0.015 * TP.rolling(window=10, center=False).std()),
        name="cci",
    )
    trace = go.Scatter(
        x=df.index,
        y=CCI,
        mode="lines",
        showlegend=False,
        name="CCI",
        line={"width": 1},
    )
    return trace


# Price Rate of Change
def roc_trace(df, ndays=5):
    N = df["c"].diff(ndays)
    D = df["c"].shift(ndays)
    ROC = pd.Series(N / D, name="roc")
    trace = go.Scatter(
        x=df.index,
        y=ROC,
        mode="lines",
        showlegend=False,
        name="ROC",
        line={"width": 1},
    )
    return trace


# Stochastic oscillator %K
def stoc_trace(df):
    SOk = pd.Series((df["c"] - df["l"]) / (df["h"] - df["l"]), name="SO%k")
    trace = go.Scatter(
        x=df.index,
        y=SOk,
        mode="lines",
        showlegend=False,
        name="SO%k",
        line={"width": 1},
    )
    return trace


# Momentum
def mom_trace(df, n=5):
    M = pd.Series(df["c"].diff(n), name="Momentum_" + str(n))
    trace = go.Scatter(
        x=df.index,
        y=M,
        mode="lines",
        showlegend=False,
        name="MOM",
        line={"width": 1},
        connectgaps=True,
    )
    return trace


# Pivot points
def pp_trace(df, fig):
    PP = pd.Series((df["h"] + df["l"] + df["c"]) / 3)
    R1 = pd.Series(2 * PP - df["l"])
    S1 = pd.Series(2 * PP - df["h"])
    R2 = pd.Series(PP + df["h"] - df["l"])
    S2 = pd.Series(PP - df["h"] + df["l"])
    R3 = pd.Series(df["h"] + 2 * (PP - df["l"]))
    S3 = pd.Series(df["l"] - 2 * (df["h"] - PP))
    trace = go.Scatter(
        x=df.index,
        y=PP,
        mode="lines",
        showlegend=False,
        name="PP",
        line={"width": 1},
    )
    trace1 = go.Scatter(
        x=df.index,
        y=R1,
        mode="lines",
        showlegend=False,
        name="R1",
        line={"width": 1},
    )
    trace2 = go.Scatter(
        x=df.index,
        y=S1,
        mode="lines",
        showlegend=False,
        name="S1",
        line={"width": 1},
    )
    trace3 = go.Scatter(
        x=df.index,
        y=R2,
        mode="lines",
        showlegend=False,
        name="R2",
        line={"width": 1},
    )
    trace4 = go.Scatter(
        x=df.index,
        y=S2,
        mode="lines",
        showlegend=False,
        name="S2",
        line={"width": 1},
    )
    trace5 = go.Scatter(
        x=df.index,
        y=R3,
        mode="lines",
        showlegend=False,
        name="R3",
        line={"width": 1},
    )
    trace6 = go.Scatter(
        x=df.index,
        y=S3,
        mode="lines",
        showlegend=False,
        name="S3",
        line={"width": 1},
    )
    fig.append_trace(trace, 1, 1)
    fig.append_trace(trace1, 1, 1)
    fig.append_trace(trace2, 1, 1)
    fig.append_trace(trace3, 1, 1)
    fig.append_trace(trace4, 1, 1)
    fig.append_trace(trace5, 1, 1)
    fig.append_trace(trace6, 1, 1)
    return fig


# MAIN CHART TRACES (STYLE tab)
def line_trace(df):
    trace = go.Scatter(
        x=df.index, y=df["c"], mode="lines", name="", showlegend=False
    )
    return trace


def area_trace(df):
    trace = go.Scatter(
        x=df.index, y=df["c"], fill="toself", name="area", showlegend=False
    )
    return trace


def bar_trace(df):
    return go.Ohlc(
        x=df.index,
        open=df["o"],
        high=df["h"],
        low=df["l"],
        close=df["c"],
        increasing=dict(line=dict(color="#888888")),
        decreasing=dict(line=dict(color="#888888")),
        showlegend=False,
        name="",
    )


def colored_bar_trace(df):
    return go.Ohlc(
        x=df.index,
        open=df["o"],
        high=df["h"],
        low=df["l"],
        close=df["c"],
        showlegend=False,
        name="",  # Candle values
    )


def candlestick_trace(df):
    return go.Candlestick(
        x=df.index,
        open=df["o"],
        high=df["h"],
        low=df["l"],
        close=df["c"],
        increasing=dict(line=dict(color="#00ff00")),
        decreasing=dict(line=dict(color="white")),
        showlegend=False,
        name="",
    )


# For buy/sell modal
def ask_modal_trace(ticker, index, ticker_data):
    df = ticker_data[ticker].iloc[index - 10 : index]  # returns ten rows
    return go.Scatter(x=df.index, y=df["Ask"], mode="lines", showlegend=False)


# For buy/sell modal
def bid_modal_trace(ticker, index, ticker_data):
    df = ticker_data[ticker].iloc[index - 10 : index]  # returns ten rows
    return go.Scatter(x=df.index, y=df["Bid"], mode="lines", showlegend=False)
