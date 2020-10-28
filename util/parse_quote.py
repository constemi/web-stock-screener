import pandas as pd
from .pct_change import pct_change

from typing import Tuple, Any


def get_dist(a, b) -> float:
    if a == b:
        return 0
    else:
        return pd.Series([a, b]).diff()[1]


def open_quote(last_close: float, curr_price: float) -> Tuple[float, float]:
    diff = get_dist(last_close, curr_price)
    pct = pct_change(last_close, curr_price)
    return diff, pct


def closed_quote(data) -> Tuple[Any, Any, float, float]:
    last_close = data["pc"]
    curr_price = data["c"]
    diff = get_dist(last_close, curr_price)
    pct = pct_change(last_close, curr_price)
    return curr_price, last_close, diff, pct
