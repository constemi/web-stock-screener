from .percentage import percentage

from typing import Tuple, Any


def parse_closed_quote(data) -> Tuple[Any, Any, str, Any, float]:
    close = data["c"]
    last_close = data["pc"]
    diff = close - last_close
    sign = "+" if diff > 0 else ""  # conditional positive sign
    amt = round(diff, 2)  # numerical amount change
    chg = percentage(diff, last_close)  # percentage change gain or loss

    return close, last_close, sign, amt, chg


def parse_open_quote(
    current_price: float, previous_close: float
) -> Tuple[str, Any, Any]:
    diff = current_price - previous_close
    sign = "+" if diff > 0 else ""
    amt = round(diff, 2)
    chg = percentage(diff, previous_close)

    return sign, amt, chg
