# -*- coding: utf-8 -*-
import os
import time
import finnhub
import pandas as pd
from datetime import datetime, timedelta
from typing import Dict, Union, Any

""" DataFrame
o
List of open prices for returned candles.

h
List of high prices for returned candles.

l
List of low prices for returned candles.

c
List of close prices for returned candles.

v
List of volume data for returned candles.

t
List of timestamp for returned candles.

s
Status of the response. This field can either be ok or no_data.

            c        h         l         o   s           t         v
0    346.8200  347.000  346.7550  346.9900  ok  1598461500    215095
1    346.6800  346.930  346.6500  346.8100  ok  1598461800    586279
2    346.8800  346.900  346.6300  346.6900  ok  1598462100    416466

"""


class DataProvider:
    def __init__(
        self,
        name: str,
        api_key: Union[str, None] = os.getenv("FINNHUB_API_KEY"),
    ):
        self.client = finnhub.Client(api_key)
        self.name = name
        self.key = api_key

    @property
    def symbol(self) -> str:
        return str(self.name)

    def quote(self) -> Dict[str, Union[int, float]]:
        return self.client.quote(self.name)

    def candles(
        self, resolution: Union[str, int], initial: int, termination: int,
    ) -> pd.DataFrame:
        """
        resolution: 1, 5, 15, 30, 60, 'D', 'W', 'M'
        initial: UNIX timestamp, interval initial value >= -1Year
        termination: UNIX timestamp, interval end value
        """
        candles = self.client.stock_candles(
            self.name, resolution, initial, termination, adjusted=True
        )
        return pd.DataFrame(candles)

    def financials(self, metric_type: str = "all") -> Dict[str, Any]:
        return self.client.company_basic_financials(self.name, metric_type)

    def latest_news(
        self,
        initial: Union[str, None] = None,
        termination: str = str(datetime.now().date()),
    ) -> Dict[str, Any]:
        if not initial:
            initial = str((datetime.now() - timedelta(days=5)).date())

        return self.client.company_news(
            self.name, _from=initial, to=termination
        )
