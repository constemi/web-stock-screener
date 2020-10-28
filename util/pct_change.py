import pandas as pd


def pct_change(previous: float, current: float) -> float:
    series = pd.Series([previous, current])
    return series.pct_change()[1] * 100
