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
    _this.connection = _this.connection.bind(_assertThisInitialized(_this));
    return _this;
  } // static getDerivedStateFromProps(nextProps, prevState) {
  //     if (nextProps.value !== prevState.symbol) {
  //         return {
  //             ...prevState,
  //             symbol: nextProps.value,
  //         };
  //     }
  //     return null;
  // }


  _createClass(StreamingProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.connection = new WebSocket('wss://ws.finnhub.io?token=bt6lf1n48v6oqmgq4re0');

      this.connection.onmessage = function (evt) {
        if (Object.keys(evt).includes('data')) {
          _this2.setState({
            data: "".concat(evt.data.p)
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          value = _this$props.value;

      if (value) {
        this.connection.send(JSON.stringify({
          type: 'subscribe',
          symbol: value
        }));
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2Zpbm5odWIvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RyZWFtaW5nUHJvdmlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiU3RyZWFtaW5nUHJvdmlkZXIiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0aW9uIiwiYmluZCIsIldlYlNvY2tldCIsIm9ubWVzc2FnZSIsImV2dCIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsInNldFN0YXRlIiwicCIsInByb3BzIiwiaWQiLCJ2YWx1ZSIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsInN5bWJvbCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsInNldFByb3BzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7O0lBT3FCQSxpQjs7Ozs7QUFDakIsK0JBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUU7QUFERyxLQUFiO0FBR0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQiwrQkFBbEI7QUFMVTtBQU1iLEcsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O3dDQUVvQjtBQUFBOztBQUNoQixXQUFLRCxVQUFMLEdBQWtCLElBQUlFLFNBQUosQ0FDZCxnREFEYyxDQUFsQjs7QUFHQSxXQUFLRixVQUFMLENBQWdCRyxTQUFoQixHQUE0QixVQUFBQyxHQUFHLEVBQUk7QUFDL0IsWUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQVosRUFBaUJHLFFBQWpCLENBQTBCLE1BQTFCLENBQUosRUFBdUM7QUFDbkMsZ0JBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNULGdCQUFJLFlBQUtLLEdBQUcsQ0FBQ0wsSUFBSixDQUFTVSxDQUFkO0FBQUwsV0FBZDtBQUNIO0FBQ0osT0FKRDtBQUtIOzs7NkJBRVE7QUFBQSx3QkFDZSxLQUFLQyxLQURwQjtBQUFBLFVBQ0VDLEVBREYsZUFDRUEsRUFERjtBQUFBLFVBQ01DLEtBRE4sZUFDTUEsS0FETjs7QUFHTCxVQUFJQSxLQUFKLEVBQVc7QUFDUCxhQUFLWixVQUFMLENBQWdCYSxJQUFoQixDQUNJQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxjQUFJLEVBQUUsV0FBUDtBQUFvQkMsZ0JBQU0sRUFBRUw7QUFBNUIsU0FBZixDQURKO0FBR0g7O0FBRUQsMEJBQ0k7QUFBSyxVQUFFLEVBQUVELEVBQVQ7QUFBYSxhQUFLLEVBQUM7QUFBbkIsU0FDSyxLQUFLYixLQUFMLENBQVdDLElBRGhCLENBREo7QUFLSDs7OztFQTVDMENtQiwrQzs7O0FBK0MvQ3JCLGlCQUFpQixDQUFDc0IsWUFBbEIsR0FBaUMsRUFBakM7QUFFQXRCLGlCQUFpQixDQUFDdUIsU0FBbEIsR0FBOEI7QUFDMUI7OztBQUdBVCxJQUFFLEVBQUVVLGlEQUFTLENBQUNDLE1BSlk7O0FBTTFCOzs7QUFHQUMsT0FBSyxFQUFFRixpREFBUyxDQUFDQyxNQUFWLENBQWlCRSxVQVRFOztBQVcxQjs7O0FBR0FaLE9BQUssRUFBRVMsaURBQVMsQ0FBQ0MsTUFkUzs7QUFnQjFCOzs7O0FBSUFHLFVBQVEsRUFBRUosaURBQVMsQ0FBQ0s7QUFwQk0sQ0FBOUIsQyIsImZpbGUiOiI0YzRkN2QzLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXG4gKiBkaXNwbGF5cyBpdC5cbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmVhbWluZ1Byb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6ICcnLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB0aGlzLmNvbm5lY3Rpb24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgLy8gICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHByZXZTdGF0ZS5zeW1ib2wpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiB7XG4gICAgLy8gICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgIC8vICAgICAgICAgICAgIHN5bWJvbDogbmV4dFByb3BzLnZhbHVlLFxuICAgIC8vICAgICAgICAgfTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldChcbiAgICAgICAgICAgICd3c3M6Ly93cy5maW5uaHViLmlvP3Rva2VuPWJ0NmxmMW40OHY2b3FtZ3E0cmUwJ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25tZXNzYWdlID0gZXZ0ID0+IHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhldnQpLmluY2x1ZGVzKCdkYXRhJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBgJHtldnQuZGF0YS5wfWB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZCwgdmFsdWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kKFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHt0eXBlOiAnc3Vic2NyaWJlJywgc3ltYm9sOiB2YWx1ZX0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfSBsYWJlbD1cIndzXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3RyZWFtaW5nUHJvdmlkZXIuZGVmYXVsdFByb3BzID0ge307XG5cblN0cmVhbWluZ1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==