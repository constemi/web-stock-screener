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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2Zpbm5odWIvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RyZWFtaW5nUHJvdmlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiU3RyZWFtaW5nUHJvdmlkZXIiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0aW9uIiwiV2ViU29ja2V0Iiwib25tZXNzYWdlIiwiZXZ0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJwIiwicHJvcHMiLCJpZCIsInZhbHVlIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwic3ltYm9sIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7SUFPcUJBLGlCOzs7OztBQUNqQiwrQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRTtBQURHLEtBQWI7QUFHQSxVQUFLQyxVQUFMLEdBQWtCLElBQUlDLFNBQUosQ0FDZCxnREFEYyxDQUFsQjs7QUFHQSxVQUFLRCxVQUFMLENBQWdCRSxTQUFoQixHQUE0QixVQUFBQyxHQUFHLEVBQUk7QUFDL0IsVUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQVosRUFBaUJHLFFBQWpCLENBQTBCLE1BQTFCLENBQUosRUFBdUM7QUFDbkMsY0FBS0MsUUFBTCxDQUFjO0FBQUNSLGNBQUksWUFBS0ksR0FBRyxDQUFDSixJQUFKLENBQVNTLENBQWQ7QUFBTCxTQUFkO0FBQ0g7QUFDSixLQUpEOztBQVJVO0FBYWIsRyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7NkJBRVM7QUFBQSx3QkFDZSxLQUFLQyxLQURwQjtBQUFBLFVBQ0VDLEVBREYsZUFDRUEsRUFERjtBQUFBLFVBQ01DLEtBRE4sZUFDTUEsS0FETjs7QUFHTCxVQUFJQSxLQUFKLEVBQVc7QUFDUCxhQUFLWCxVQUFMLENBQWdCWSxJQUFoQixDQUNJQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxjQUFJLEVBQUUsV0FBUDtBQUFvQkMsZ0JBQU0sRUFBRUw7QUFBNUIsU0FBZixDQURKO0FBR0g7O0FBRUQsMEJBQ0k7QUFBSyxVQUFFLEVBQUVELEVBQVQ7QUFBYSxhQUFLLEVBQUM7QUFBbkIsU0FDSyxLQUFLWixLQUFMLENBQVdDLElBRGhCLENBREo7QUFLSDs7OztFQXhDMENrQiwrQzs7O0FBMkMvQ3BCLGlCQUFpQixDQUFDcUIsWUFBbEIsR0FBaUMsRUFBakM7QUFFQXJCLGlCQUFpQixDQUFDc0IsU0FBbEIsR0FBOEI7QUFDMUI7OztBQUdBVCxJQUFFLEVBQUVVLGlEQUFTLENBQUNDLE1BSlk7O0FBTTFCOzs7QUFHQUMsT0FBSyxFQUFFRixpREFBUyxDQUFDQyxNQUFWLENBQWlCRSxVQVRFOztBQVcxQjs7O0FBR0FaLE9BQUssRUFBRVMsaURBQVMsQ0FBQ0MsTUFkUzs7QUFnQjFCOzs7O0FBSUFHLFVBQVEsRUFBRUosaURBQVMsQ0FBQ0s7QUFwQk0sQ0FBOUIsQyIsImZpbGUiOiIxZDJhYmI1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXG4gKiBkaXNwbGF5cyBpdC5cbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmVhbWluZ1Byb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6ICcnLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KFxuICAgICAgICAgICAgJ3dzczovL3dzLmZpbm5odWIuaW8/dG9rZW49YnQ2bGYxbjQ4djZvcW1ncTRyZTAnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSBldnQgPT4ge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGV2dCkuaW5jbHVkZXMoJ2RhdGEnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGAke2V2dC5kYXRhLnB9YH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAvLyAgICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gcHJldlN0YXRlLnN5bWJvbCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgLy8gICAgICAgICAgICAgc3ltYm9sOiBuZXh0UHJvcHMudmFsdWUsXG4gICAgLy8gICAgICAgICB9O1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBudWxsO1xuICAgIC8vIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lkLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQoXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe3R5cGU6ICdzdWJzY3JpYmUnLCBzeW1ib2w6IHZhbHVlfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9IGxhYmVsPVwid3NcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TdHJlYW1pbmdQcm92aWRlci5kZWZhdWx0UHJvcHMgPSB7fTtcblxuU3RyZWFtaW5nUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9