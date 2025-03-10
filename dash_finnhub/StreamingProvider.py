# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class StreamingProvider(Component):
    """A StreamingProvider component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- label (string; optional): An api key that will be used when this component is rendered.
- data (string; optional)
- value (string; optional): A json string used as the default input must contain a symbols key
ex "{"symbols": ["SPY", "QQQ", "DIA", "XIU.TO"]}"."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, label=Component.UNDEFINED, data=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'label', 'data', 'value']
        self._type = 'StreamingProvider'
        self._namespace = 'dash_finnhub'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'label', 'data', 'value']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(StreamingProvider, self).__init__(**args)
