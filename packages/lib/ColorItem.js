'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _constants = require('./constants');

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorItem = function (_Component) {
  (0, _inherits3.default)(ColorItem, _Component);

  function ColorItem() {
    (0, _classCallCheck3.default)(this, ColorItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ColorItem.__proto__ || (0, _getPrototypeOf2.default)(ColorItem)).call(this));

    _this.handleDelete = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          isDelete = _this$props.isDelete,
          isRemove = _this$props.isRemove;
      var active = _this.state.active;


      if (isDelete && isRemove) {
        if (!active) {
          _this.props.onDeleteChange(id);
          _this.setState({
            style: _constants.SELECTSTYLE
          });
        } else {
          _this.props.onCancelDelete(id);
          _this.setState({
            style: {}
          });
        }
        _this.setState({
          active: !active
        });
      }
    };

    _this.state = {
      style: {},
      active: false
    };
    return _this;
  }

  (0, _createClass3.default)(ColorItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isRemove !== this.props.isRemove) {
        this.setState({
          style: {},
          active: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          isDelete = _props.isDelete,
          isRemove = _props.isRemove;


      var originStyle = (0, _extends3.default)({ background: color }, this.state.style);
      var activeStyle = !isDelete ? { opacity: 0.15 } : null;
      var colorStyle = isRemove ? (0, _assign2.default)(originStyle, activeStyle) : originStyle;

      return _react2.default.createElement('span', {
        className: 'colorTheme-li-span',
        style: colorStyle,
        onClick: this.handleDelete
      });
    }
  }]);
  return ColorItem;
}(_react.Component);

ColorItem.propTypes = {
  id: _propTypes2.default.number.isRequired,
  color: _propTypes2.default.string.isRequired,
  isDelete: _propTypes2.default.bool.isRequired,
  isRemove: _propTypes2.default.bool.isRequired,
  onDeleteChange: _propTypes2.default.func.isRequired,
  onCancelDelete: _propTypes2.default.func.isRequired
};
exports.default = ColorItem;
//# sourceMappingURL=ColorItem.js.map