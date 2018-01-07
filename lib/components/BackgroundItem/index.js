'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var Actions = _interopRequireWildcard(_actions);

var _utils = require('../../utils');

require('../../style.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var colorTheme = _ref.colorTheme;
  return { colorTheme: colorTheme };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(Actions, dispatch)
  };
};

var BackgroundItem = function (_Component) {
  (0, _inherits3.default)(BackgroundItem, _Component);

  function BackgroundItem() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BackgroundItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = BackgroundItem.__proto__ || (0, _getPrototypeOf2.default)(BackgroundItem)).call.apply(_ref2, [this].concat(args))), _this), _this.handleBgChange = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          background = _this$props.background;


      _this.props.onBgChange(id, background);
      _this.props.onClickChange(id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BackgroundItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          background = _props.background,
          active = _props.active;

      var style = active ? (0, _utils.getSelectedStyle)() : {};

      return _react2.default.createElement('span', {
        style: (0, _assign2.default)({ background: background }, style),
        className: 'colorTheme-li-span',
        onClick: this.handleBgChange
      });
    }
  }]);
  return BackgroundItem;
}(_react.Component);

BackgroundItem.propTypes = {
  id: _propTypes2.default.number,
  active: _propTypes2.default.bool,
  background: _propTypes2.default.string,
  onBgChange: _propTypes2.default.func,
  onClickChange: _propTypes2.default.func.isRequired,
  actions: _propTypes2.default.object.isRequired
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BackgroundItem);
//# sourceMappingURL=index.js.map