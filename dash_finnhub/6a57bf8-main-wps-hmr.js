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
      if (Object.keys(evt).includes('data')) {
        _this.setState({
          data: "".concat(evt.data.p)
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2Zpbm5odWIvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RyZWFtaW5nUHJvdmlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiU3RyZWFtaW5nUHJvdmlkZXIiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImNvbm5lY3Rpb24iLCJXZWJTb2NrZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJwIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwic3ltYm9sIiwidmFsdWUiLCJpZCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsInNldFByb3BzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7O0lBUXFCQSxpQjs7Ozs7QUFDakIsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUU7QUFERyxLQUFiO0FBR0EsVUFBS0MsVUFBTCxHQUFrQixJQUFJQyxTQUFKLENBQ2QsZ0RBRGMsQ0FBbEI7O0FBR0EsVUFBS0QsVUFBTCxDQUFnQkUsZ0JBQWhCLENBQWlDLFNBQWpDLEVBQTRDLFVBQUFDLEdBQUcsRUFBSTtBQUMvQyxVQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUYsR0FBWixFQUFpQkcsUUFBakIsQ0FBMEIsTUFBMUIsQ0FBSixFQUF1QztBQUNuQyxjQUFLQyxRQUFMLENBQWM7QUFBQ1IsY0FBSSxZQUFLSSxHQUFHLENBQUNKLElBQUosQ0FBU1MsQ0FBZDtBQUFMLFNBQWQ7QUFDSDtBQUNKLEtBSkQ7O0FBS0EsVUFBS1IsVUFBTCxDQUFnQkUsZ0JBQWhCLENBQWlDLE1BQWpDLEVBQXlDLFVBQUFDLEdBQUc7QUFBQSxhQUN4QyxNQUFLSCxVQUFMLENBQWdCUyxJQUFoQixDQUNJQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxZQUFJLEVBQUUsV0FBUDtBQUFvQkMsY0FBTSxFQUFFaEIsS0FBSyxDQUFDaUI7QUFBbEMsT0FBZixDQURKLENBRHdDO0FBQUEsS0FBNUM7O0FBYmU7QUFrQmxCOzs7O3dDQUVtQixDQUFFOzs7NkJBRWI7QUFBQSxVQUNFQyxFQURGLEdBQ1EsS0FBS2xCLEtBRGIsQ0FDRWtCLEVBREYsRUFHTDtBQUNBOztBQUVBLDBCQUNJO0FBQUssVUFBRSxFQUFFQSxFQUFUO0FBQWEsYUFBSyxFQUFDO0FBQW5CLFNBQ0ssS0FBS2pCLEtBQUwsQ0FBV0MsSUFEaEIsQ0FESjtBQUtIOzs7O0VBbEMwQ2lCLCtDOzs7QUFxQy9DcEIsaUJBQWlCLENBQUNxQixZQUFsQixHQUFpQyxFQUFqQztBQUVBckIsaUJBQWlCLENBQUNzQixTQUFsQixHQUE4QjtBQUMxQjs7O0FBR0FILElBQUUsRUFBRUksaURBQVMsQ0FBQ0MsTUFKWTs7QUFNMUI7OztBQUdBQyxPQUFLLEVBQUVGLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBVEU7O0FBVzFCOzs7QUFHQVIsT0FBSyxFQUFFSyxpREFBUyxDQUFDQyxNQWRTOztBQWdCMUI7Ozs7QUFJQUcsVUFBUSxFQUFFSixpREFBUyxDQUFDSztBQXBCTSxDQUE5QixDIiwiZmlsZSI6IjZhNTdiZjgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJlYW1pbmdQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTogJycsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQoXG4gICAgICAgICAgICAnd3NzOi8vd3MuZmlubmh1Yi5pbz90b2tlbj1idDZsZjFuNDh2Nm9xbWdxNHJlMCdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldnQgPT4ge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGV2dCkuaW5jbHVkZXMoJ2RhdGEnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGAke2V2dC5kYXRhLnB9YH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCBldnQgPT5cbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kKFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHt0eXBlOiAnc3Vic2NyaWJlJywgc3ltYm9sOiBwcm9wcy52YWx1ZX0pXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZSh2YWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1YnNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfSBsYWJlbD1cIndzXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3RyZWFtaW5nUHJvdmlkZXIuZGVmYXVsdFByb3BzID0ge307XG5cblN0cmVhbWluZ1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==