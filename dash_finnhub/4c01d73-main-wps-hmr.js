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

    return _this;
  }

  _createClass(StreamingProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.value) {
        this.connection.send(JSON.stringify({
          type: 'subscribe',
          symbol: this.props.value
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2Zpbm5odWIvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RyZWFtaW5nUHJvdmlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiU3RyZWFtaW5nUHJvdmlkZXIiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0aW9uIiwiV2ViU29ja2V0Iiwib25tZXNzYWdlIiwiZXZ0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJwIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJwcm9wcyIsInZhbHVlIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwic3ltYm9sIiwiaWQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7Ozs7OztJQU9xQkEsaUI7Ozs7O0FBQ2pCLCtCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFO0FBREcsS0FBYjtBQUdBLFVBQUtDLFVBQUwsR0FBa0IsSUFBSUMsU0FBSixDQUNkLGdEQURjLENBQWxCOztBQUdBLFVBQUtELFVBQUwsQ0FBZ0JFLFNBQWhCLEdBQTRCLFVBQUFDLEdBQUcsRUFBSTtBQUMvQixVQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUYsR0FBWixFQUFpQkcsUUFBakIsQ0FBMEIsTUFBMUIsQ0FBSixFQUF1QztBQUNuQyxjQUFLQyxRQUFMLENBQWM7QUFBQ1IsY0FBSSxZQUFLSSxHQUFHLENBQUNKLElBQUosQ0FBU1MsQ0FBZDtBQUFMLFNBQWQ7QUFDSDtBQUNKLEtBSkQ7O0FBUlU7QUFhYjs7Ozt1Q0FFa0JDLFMsRUFBV0MsUyxFQUFXQyxRLEVBQVU7QUFDL0MsVUFBSSxLQUFLQyxLQUFMLENBQVdDLEtBQWYsRUFBc0I7QUFDbEIsYUFBS2IsVUFBTCxDQUFnQmMsSUFBaEIsQ0FDSUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ0MsY0FBSSxFQUFFLFdBQVA7QUFBb0JDLGdCQUFNLEVBQUUsS0FBS04sS0FBTCxDQUFXQztBQUF2QyxTQUFmLENBREo7QUFHSDtBQUNKOzs7NkJBRVE7QUFBQSxVQUNFTSxFQURGLEdBQ1EsS0FBS1AsS0FEYixDQUNFTyxFQURGO0FBR0wsMEJBQ0k7QUFBSyxVQUFFLEVBQUVBLEVBQVQ7QUFBYSxhQUFLLEVBQUM7QUFBbkIsU0FDSyxLQUFLckIsS0FBTCxDQUFXQyxJQURoQixDQURKO0FBS0g7Ozs7RUFoQzBDcUIsK0M7OztBQW1DL0N2QixpQkFBaUIsQ0FBQ3dCLFlBQWxCLEdBQWlDLEVBQWpDO0FBRUF4QixpQkFBaUIsQ0FBQ3lCLFNBQWxCLEdBQThCO0FBQzFCOzs7QUFHQUgsSUFBRSxFQUFFSSxpREFBUyxDQUFDQyxNQUpZOztBQU0xQjs7O0FBR0FDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFURTs7QUFXMUI7OztBQUdBYixPQUFLLEVBQUVVLGlEQUFTLENBQUNDLE1BZFM7O0FBZ0IxQjs7OztBQUlBRyxVQUFRLEVBQUVKLGlEQUFTLENBQUNLO0FBcEJNLENBQTlCLEMiLCJmaWxlIjoiNGMwMWQ3My1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxuICogZGlzcGxheXMgaXQuXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJlYW1pbmdQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldChcbiAgICAgICAgICAgICd3c3M6Ly93cy5maW5uaHViLmlvP3Rva2VuPWJ0NmxmMW40OHY2b3FtZ3E0cmUwJ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25tZXNzYWdlID0gZXZ0ID0+IHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhldnQpLmluY2x1ZGVzKCdkYXRhJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBgJHtldnQuZGF0YS5wfWB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc2VuZChcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7dHlwZTogJ3N1YnNjcmliZScsIHN5bWJvbDogdGhpcy5wcm9wcy52YWx1ZX0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9IGxhYmVsPVwid3NcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TdHJlYW1pbmdQcm92aWRlci5kZWZhdWx0UHJvcHMgPSB7fTtcblxuU3RyZWFtaW5nUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9