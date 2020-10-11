import datetime
import pandas as pd
from api import DataProvider
from plotly import subplots

from trace import (
    moving_average_trace,
    e_moving_average_trace,
    bollinger_trace,
    accumulation_trace,
    cci_trace,
    roc_trace,
    stoc_trace,
    mom_trace,
    pp_trace,
    line_trace,
    area_trace,
    bar_trace,
    colored_bar_trace,
    candlestick_trace,
    volume_trace,
)


# Returns graph figure
def get_fig(ticker, type_trace, studies, period):
    # Get OHLC data
    print("getting data for {}".format(ticker))
    stock = DataProvider(ticker)
    df = stock.candles(
        period,
        int(
            (datetime.datetime.now() - datetime.timedelta(days=7)).timestamp()
        ),
    )

    df.index = pd.to_datetime(df["t"], unit="s")

    subplot_traces = [  # first row traces
        "accumulation_trace",
        "cci_trace",
        "roc_trace",
        "stoc_trace",
        "mom_trace",
    ]
    selected_subplots_studies = []
    selected_first_row_studies = []
    row = 2  # number of subplots (candles + volume)

    if studies:
        for study in studies:
            if study in subplot_traces:
                row += 1  # increment rows only if the study needs a subplot
                selected_subplots_studies.append(study)
            else:
                selected_first_row_studies.append(study)

    chart_height, study_height = 450, 100
    selected_studies = [study_height for study in selected_subplots_studies]
    row_width = [study_height, *selected_studies, chart_height]

    fig = subplots.make_subplots(
        rows=row,
        shared_xaxes=True,
        cols=1,
        print_grid=False,
        vertical_spacing=0.05,
        start_cell="top-left",
        row_width=row_width,
    )

    # Add volume trace (style) to figure
    fig.append_trace(volume_trace(df), 2, 1)

    # Add main trace (style) to figure
    fig.append_trace(eval(type_trace)(df), 1, 1)

    # Add trace(s) on fig's first row
    for study in selected_first_row_studies:
        fig = eval(study)(df, fig)

    row = 2  # number of subplots (candles + volume)
    # Plot trace on new row
    for study in selected_subplots_studies:
        row += 1
        fig.append_trace(eval(study)(df), row, 1)

    # Layout
    fig["layout"][
        "uirevision"
    ] = "The User is always right"  # Ensures zoom on graph is same upon update
    fig["layout"]["margin"] = {"t": 50, "l": 25, "b": 25, "r": 50}
    fig["layout"]["autosize"] = True
    fig["layout"]["height"] = sum(row_width)
    fig["layout"]["hovermode"] = "x unified"
    fig["layout"]["hoverlabel"]["font"]["color"] = "#AAA"
    # Chart Layout x-axis
    fig["layout"]["xaxis"]["showgrid"] = True
    fig["layout"]["xaxis"]["gridcolor"] = "#2A2B2D"
    fig["layout"]["xaxis"]["spikesnap"] = "cursor"
    fig["layout"]["xaxis"]["spikemode"] = "across"
    fig["layout"]["xaxis"]["spikethickness"] = 1
    fig["layout"]["xaxis"]["showticklabels"] = True
    fig["layout"]["xaxis"]["tickcolor"] = "#3E3F40"
    fig["layout"]["xaxis"]["type"] = "date"
    fig["layout"]["xaxis"]["rangebreaks"] = [
        {"pattern": "day of week", "bounds": ["sat", "mon"]},
        {"pattern": "hour", "bounds": [20, 13.30]},
    ]  # hide weekends
    fig["layout"]["xaxis"]["rangeslider"]["visible"] = False
    fig["layout"]["xaxis"]["rangeselector"] = {
        "buttons": [
            {
                "count": 1,
                "label": "1d",
                "step": "day",
                "stepmode": "backward",
            },
            {
                "count": 7,
                "label": "1w",
                "step": "day",
                "stepmode": "backward",
            },
            {
                "count": 1,
                "label": "1m",
                "step": "month",
                "stepmode": "backward",
            },
            {
                "count": 6,
                "label": "6m",
                "step": "month",
                "stepmode": "backward",
            },
            {
                "count": 1,
                "label": "YTD",
                "step": "year",
                "stepmode": "todate",
            },
            {
                "count": 1,
                "label": "1y",
                "step": "year",
                "stepmode": "backward",
            },
            {"step": "all"},
        ]
    }
    # Chart Layout y-axis
    fig["layout"]["yaxis"]["side"] = "right"
    fig["layout"]["yaxis"]["showgrid"] = True
    fig["layout"]["yaxis"]["gridcolor"] = "#3E3F40"
    fig["layout"]["yaxis"]["gridwidth"] = 1
    fig["layout"]["yaxis"]["spikesnap"] = "cursor"
    fig["layout"]["yaxis"]["spikemode"] = "across"
    fig["layout"]["yaxis"]["spikedash"] = "solid"
    fig["layout"]["yaxis"]["spikethickness"] = 1
    fig["layout"]["yaxis"]["showticklabels"] = True
    fig["layout"]["yaxis"]["tickcolor"] = "#3E3F40"

    # Volume + Subplot layouts
    for i in range(len(selected_subplots_studies) + 1):
        axis_num = i + 2  # account for existing axes
        # Subplot Layout x-axis
        fig["layout"][f"xaxis{axis_num}"]["type"] = "date"
        fig["layout"][f"xaxis{axis_num}"]["showgrid"] = False
        fig["layout"][f"xaxis{axis_num}"]["zeroline"] = True
        fig["layout"][f"xaxis{axis_num}"]["zerolinecolor"] = "#3E3F40"
        fig["layout"][f"xaxis{axis_num}"]["showticklabels"] = False
        fig["layout"][f"xaxis{axis_num}"]["rangebreaks"] = [
            {"pattern": "day of week", "bounds": ["sat", "mon"]},
            {"pattern": "hour", "bounds": [20, 13.30]},
        ]  # hide weekends
        # Subplot Layout y-axis
        fig["layout"][f"yaxis{axis_num}"]["side"] = "right"
        fig["layout"][f"yaxis{axis_num}"]["showgrid"] = False
        fig["layout"][f"yaxis{axis_num}"]["zeroline"] = False
        fig["layout"][f"yaxis{axis_num}"]["showticklabels"] = True

    # Layout background
    fig["layout"].update(paper_bgcolor="#21252C", plot_bgcolor="#21252C")

    return fig
