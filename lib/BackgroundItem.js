'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackgroundItem = function (_Component) {
  _inherits(BackgroundItem, _Component);

  function BackgroundItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BackgroundItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BackgroundItem.__proto__ || Object.getPrototypeOf(BackgroundItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleBgChange = function () {
      var _this$props = _this.props,
          background = _this$props.background,
          id = _this$props.id;


      _this.props.onBgChange(background);
      _this.props.onClickChange(id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /** 处理背景 */


  _createClass(BackgroundItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          background = _props.background,
          active = _props.active;

      var style = active ? {
        borderColor: '#49a9ee',
        boxShadow: '0 0 0 2px rgba(16, 142, 233, 0.2)',
        background: background
      } : {
        background: background
      };

      return _react2.default.createElement('span', {
        style: style,
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
  onClickChange: _propTypes2.default.func
};

exports.default = BackgroundItem;
//# sourceMappingURL=BackgroundItem.js.map