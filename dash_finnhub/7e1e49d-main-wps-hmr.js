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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.connection.send(JSON.stringify({
        type: 'subscribe',
        symbol: this.props.value
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2Zpbm5odWIvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RyZWFtaW5nUHJvdmlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiU3RyZWFtaW5nUHJvdmlkZXIiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0aW9uIiwiV2ViU29ja2V0Iiwib25tZXNzYWdlIiwiZXZ0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJwIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwic3ltYm9sIiwicHJvcHMiLCJ2YWx1ZSIsImlkIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7SUFPcUJBLGlCOzs7OztBQUNqQiwrQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRTtBQURHLEtBQWI7QUFHQSxVQUFLQyxVQUFMLEdBQWtCLElBQUlDLFNBQUosQ0FDZCxnREFEYyxDQUFsQjs7QUFHQSxVQUFLRCxVQUFMLENBQWdCRSxTQUFoQixHQUE0QixVQUFBQyxHQUFHLEVBQUk7QUFDL0IsVUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQVosRUFBaUJHLFFBQWpCLENBQTBCLE1BQTFCLENBQUosRUFBdUM7QUFDbkMsY0FBS0MsUUFBTCxDQUFjO0FBQUNSLGNBQUksWUFBS0ksR0FBRyxDQUFDSixJQUFKLENBQVNTLENBQWQ7QUFBTCxTQUFkO0FBQ0g7QUFDSixLQUpEOztBQVJVO0FBYWI7Ozs7d0NBRW1CO0FBQ2hCLFdBQUtSLFVBQUwsQ0FBZ0JTLElBQWhCLENBQ0lDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLFlBQUksRUFBRSxXQUFQO0FBQW9CQyxjQUFNLEVBQUUsS0FBS0MsS0FBTCxDQUFXQztBQUF2QyxPQUFmLENBREo7QUFHSDs7OzZCQUVRO0FBQUEsVUFDRUMsRUFERixHQUNRLEtBQUtGLEtBRGIsQ0FDRUUsRUFERjtBQUdMLDBCQUNJO0FBQUssVUFBRSxFQUFFQSxFQUFUO0FBQWEsYUFBSyxFQUFDO0FBQW5CLFNBQ0ssS0FBS2xCLEtBQUwsQ0FBV0MsSUFEaEIsQ0FESjtBQUtIOzs7O0VBOUIwQ2tCLCtDOzs7QUFpQy9DcEIsaUJBQWlCLENBQUNxQixZQUFsQixHQUFpQyxFQUFqQztBQUVBckIsaUJBQWlCLENBQUNzQixTQUFsQixHQUE4QjtBQUMxQjs7O0FBR0FILElBQUUsRUFBRUksaURBQVMsQ0FBQ0MsTUFKWTs7QUFNMUI7OztBQUdBQyxPQUFLLEVBQUVGLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBVEU7O0FBVzFCOzs7QUFHQVIsT0FBSyxFQUFFSyxpREFBUyxDQUFDQyxNQWRTOztBQWdCMUI7Ozs7QUFJQUcsVUFBUSxFQUFFSixpREFBUyxDQUFDSztBQXBCTSxDQUE5QixDIiwiZmlsZSI6IjdlMWU0OWQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyZWFtaW5nUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTogJycsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQoXG4gICAgICAgICAgICAnd3NzOi8vd3MuZmlubmh1Yi5pbz90b2tlbj1idDZsZjFuNDh2Nm9xbWdxNHJlMCdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9ubWVzc2FnZSA9IGV2dCA9PiB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZXZ0KS5pbmNsdWRlcygnZGF0YScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogYCR7ZXZ0LmRhdGEucH1gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kKFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe3R5cGU6ICdzdWJzY3JpYmUnLCBzeW1ib2w6IHRoaXMucHJvcHMudmFsdWV9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfSBsYWJlbD1cIndzXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3RyZWFtaW5nUHJvdmlkZXIuZGVmYXVsdFByb3BzID0ge307XG5cblN0cmVhbWluZ1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==