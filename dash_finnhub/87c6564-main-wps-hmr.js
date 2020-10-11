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

  function StreamingProvider(props) {
    var _this;

    _classCallCheck(this, StreamingProvider);

    _this = _super.call(this, props);
    _this.state = {
      data: ''
    };
    _this.connection = new WebSocket('wss://ws.finnhub.io?token=bt6lf1n48v6oqmgq4re0');

    _this.connection.addEventListener('message', function (evt) {
      _this.setState({
        data: JSON.stringify(evt.data)
      });
    });

    _this.connection.addEventListener('open', function (evt) {
      return _this.connection.send(JSON.stringify({
        type: 'subscribe',
        symbol: props.value
      }));
    });

    return _this;
  }

  _createClass(StreamingProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id; // const subscription = this.subscribe(value);
      // console.log(subscription);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2Zpbm5odWIvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RyZWFtaW5nUHJvdmlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiU3RyZWFtaW5nUHJvdmlkZXIiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImNvbm5lY3Rpb24iLCJXZWJTb2NrZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0Iiwic2V0U3RhdGUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCIsInR5cGUiLCJzeW1ib2wiLCJ2YWx1ZSIsImlkIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7SUFRcUJBLGlCOzs7OztBQUNqQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRTtBQURHLEtBQWI7QUFHQSxVQUFLQyxVQUFMLEdBQWtCLElBQUlDLFNBQUosQ0FDZCxnREFEYyxDQUFsQjs7QUFHQSxVQUFLRCxVQUFMLENBQWdCRSxnQkFBaEIsQ0FBaUMsU0FBakMsRUFBNEMsVUFBQUMsR0FBRyxFQUFJO0FBQy9DLFlBQUtDLFFBQUwsQ0FBYztBQUFDTCxZQUFJLEVBQUVNLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxHQUFHLENBQUNKLElBQW5CO0FBQVAsT0FBZDtBQUNILEtBRkQ7O0FBR0EsVUFBS0MsVUFBTCxDQUFnQkUsZ0JBQWhCLENBQWlDLE1BQWpDLEVBQXlDLFVBQUFDLEdBQUc7QUFBQSxhQUN4QyxNQUFLSCxVQUFMLENBQWdCTyxJQUFoQixDQUNJRixJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDRSxZQUFJLEVBQUUsV0FBUDtBQUFvQkMsY0FBTSxFQUFFWixLQUFLLENBQUNhO0FBQWxDLE9BQWYsQ0FESixDQUR3QztBQUFBLEtBQTVDOztBQVhlO0FBZ0JsQjs7Ozt3Q0FFbUIsQ0FBRTs7OzZCQUViO0FBQUEsVUFDRUMsRUFERixHQUNRLEtBQUtkLEtBRGIsQ0FDRWMsRUFERixFQUdMO0FBQ0E7O0FBRUEsMEJBQ0k7QUFBSyxVQUFFLEVBQUVBLEVBQVQ7QUFBYSxhQUFLLEVBQUM7QUFBbkIsU0FDSyxLQUFLYixLQUFMLENBQVdDLElBRGhCLENBREo7QUFLSDs7OztFQWhDMENhLCtDOzs7QUFtQy9DaEIsaUJBQWlCLENBQUNpQixZQUFsQixHQUFpQyxFQUFqQztBQUVBakIsaUJBQWlCLENBQUNrQixTQUFsQixHQUE4QjtBQUMxQjs7O0FBR0FILElBQUUsRUFBRUksaURBQVMsQ0FBQ0MsTUFKWTs7QUFNMUI7OztBQUdBQyxPQUFLLEVBQUVGLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBVEU7O0FBVzFCOzs7QUFHQVIsT0FBSyxFQUFFSyxpREFBUyxDQUFDQyxNQWRTOztBQWdCMUI7Ozs7QUFJQUcsVUFBUSxFQUFFSixpREFBUyxDQUFDSztBQXBCTSxDQUE5QixDIiwiZmlsZSI6Ijg3YzY1NjQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJlYW1pbmdQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTogJycsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQoXG4gICAgICAgICAgICAnd3NzOi8vd3MuZmlubmh1Yi5pbz90b2tlbj1idDZsZjFuNDh2Nm9xbWdxNHJlMCdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogSlNPTi5zdHJpbmdpZnkoZXZ0LmRhdGEpfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIGV2dCA9PlxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQoXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe3R5cGU6ICdzdWJzY3JpYmUnLCBzeW1ib2w6IHByb3BzLnZhbHVlfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlKHZhbHVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3Vic2NyaXB0aW9uKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9IGxhYmVsPVwid3NcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TdHJlYW1pbmdQcm92aWRlci5kZWZhdWx0UHJvcHMgPSB7fTtcblxuU3RyZWFtaW5nUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9