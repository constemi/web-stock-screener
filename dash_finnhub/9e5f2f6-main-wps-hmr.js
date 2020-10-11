webpackHotUpdatedash_finnhub("main",{

/***/ "./src/lib/components/StreamingProvider.react.js":
/*!*******************************************************!*\
  !*** ./src/lib/components/StreamingProvider.react.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StreamingProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var StreamingProvider = /*#__PURE__*/function (_Component) {
  _inherits(StreamingProvider, _Component);

  var _super = _createSuper(StreamingProvider);

  function StreamingProvider() {
    var _this;

    _classCallCheck(this, StreamingProvider);

    _this = _super.call(this);
    _this.state = {
      data: ''
    };
    _this.connection = new WebSocket('wss://ws.finnhub.io?token=bt6lf1n48v6oqmgq4re0');

    _this.connection.onmessage = function (evt) {
      if (Object.keys(evt).includes('data')) {
        _this.setState({
          data: "".concat(evt.data.p)
        });
      }
    };

    _this.subscribe = function (symbol) {
      return _this.connection.send(JSON.stringify({
        type: 'subscribe',
        symbol: symbol
      }));
    };

    return _this;
  }

  _createClass(StreamingProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          value = _this$props.value;
      var subscription = this.subscribe(value);
      console.log(subscription);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        label: "ws"
      }, this.state.data);
    }
  }]);

  return StreamingProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


StreamingProvider.defaultProps = {};
StreamingProvider.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The value displayed in the input.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2Zpbm5odWIvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RyZWFtaW5nUHJvdmlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiU3RyZWFtaW5nUHJvdmlkZXIiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0aW9uIiwiV2ViU29ja2V0Iiwib25tZXNzYWdlIiwiZXZ0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJwIiwic3Vic2NyaWJlIiwic3ltYm9sIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwicHJvcHMiLCJpZCIsInZhbHVlIiwic3Vic2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsInNldFByb3BzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7O0lBT3FCQSxpQjs7Ozs7QUFDakIsK0JBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUU7QUFERyxLQUFiO0FBR0EsVUFBS0MsVUFBTCxHQUFrQixJQUFJQyxTQUFKLENBQ2QsZ0RBRGMsQ0FBbEI7O0FBR0EsVUFBS0QsVUFBTCxDQUFnQkUsU0FBaEIsR0FBNEIsVUFBQUMsR0FBRyxFQUFJO0FBQy9CLFVBQUlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaLEVBQWlCRyxRQUFqQixDQUEwQixNQUExQixDQUFKLEVBQXVDO0FBQ25DLGNBQUtDLFFBQUwsQ0FBYztBQUFDUixjQUFJLFlBQUtJLEdBQUcsQ0FBQ0osSUFBSixDQUFTUyxDQUFkO0FBQUwsU0FBZDtBQUNIO0FBQ0osS0FKRDs7QUFLQSxVQUFLQyxTQUFMLEdBQWlCLFVBQUFDLE1BQU07QUFBQSxhQUNuQixNQUFLVixVQUFMLENBQWdCVyxJQUFoQixDQUNJQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxZQUFJLEVBQUUsV0FBUDtBQUFvQkosY0FBTSxFQUFFQTtBQUE1QixPQUFmLENBREosQ0FEbUI7QUFBQSxLQUF2Qjs7QUFiVTtBQWlCYjs7Ozt3Q0FFbUIsQ0FBRTs7OzZCQUViO0FBQUEsd0JBQ2UsS0FBS0ssS0FEcEI7QUFBQSxVQUNFQyxFQURGLGVBQ0VBLEVBREY7QUFBQSxVQUNNQyxLQUROLGVBQ01BLEtBRE47QUFHTCxVQUFNQyxZQUFZLEdBQUcsS0FBS1QsU0FBTCxDQUFlUSxLQUFmLENBQXJCO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixZQUFaO0FBRUEsMEJBQ0k7QUFBSyxVQUFFLEVBQUVGLEVBQVQ7QUFBYSxhQUFLLEVBQUM7QUFBbkIsU0FDSyxLQUFLbEIsS0FBTCxDQUFXQyxJQURoQixDQURKO0FBS0g7Ozs7RUFqQzBDc0IsK0M7OztBQW9DL0N4QixpQkFBaUIsQ0FBQ3lCLFlBQWxCLEdBQWlDLEVBQWpDO0FBRUF6QixpQkFBaUIsQ0FBQzBCLFNBQWxCLEdBQThCO0FBQzFCOzs7QUFHQVAsSUFBRSxFQUFFUSxpREFBUyxDQUFDQyxNQUpZOztBQU0xQjs7O0FBR0FDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFURTs7QUFXMUI7OztBQUdBVixPQUFLLEVBQUVPLGlEQUFTLENBQUNDLE1BZFM7O0FBZ0IxQjs7OztBQUlBRyxVQUFRLEVBQUVKLGlEQUFTLENBQUNLO0FBcEJNLENBQTlCLEMiLCJmaWxlIjoiOWU1ZjJmNi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxuICogZGlzcGxheXMgaXQuXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJlYW1pbmdQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldChcbiAgICAgICAgICAgICd3c3M6Ly93cy5maW5uaHViLmlvP3Rva2VuPWJ0NmxmMW40OHY2b3FtZ3E0cmUwJ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25tZXNzYWdlID0gZXZ0ID0+IHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhldnQpLmluY2x1ZGVzKCdkYXRhJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBgJHtldnQuZGF0YS5wfWB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUgPSBzeW1ib2wgPT5cbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kKFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHt0eXBlOiAnc3Vic2NyaWJlJywgc3ltYm9sOiBzeW1ib2x9KVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZCwgdmFsdWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZSh2YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1YnNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfSBsYWJlbD1cIndzXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3RyZWFtaW5nUHJvdmlkZXIuZGVmYXVsdFByb3BzID0ge307XG5cblN0cmVhbWluZ1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==