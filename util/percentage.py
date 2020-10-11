def percentage(percent: float, whole: float) -> float:
    try:
        return round((percent * whole) / (whole ** 2) * 100, 2)
    except ZeroDivisionError:
        return 0
