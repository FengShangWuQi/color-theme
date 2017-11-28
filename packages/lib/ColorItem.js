'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorItem = function (_Component) {
  _inherits(ColorItem, _Component);

  function ColorItem() {
    _classCallCheck(this, ColorItem);

    var _this = _possibleConstructorReturn(this, (ColorItem.__proto__ || Object.getPrototypeOf(ColorItem)).call(this));

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

  _createClass(ColorItem, [{
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


      var originStyle = _extends({ background: color }, this.state.style);
      var activeStyle = !isDelete ? { opacity: 0.15 } : null;
      var colorStyle = isRemove ? Object.assign(originStyle, activeStyle) : originStyle;

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