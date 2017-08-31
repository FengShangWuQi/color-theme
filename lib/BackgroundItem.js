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
    _classCallCheck(this, BackgroundItem);

    var _this = _possibleConstructorReturn(this, (BackgroundItem.__proto__ || Object.getPrototypeOf(BackgroundItem)).call(this));

    _this.handleBgChange = _this.handleBgChange.bind(_this);
    return _this;
  }

  /** 处理背景 */


  _createClass(BackgroundItem, [{
    key: 'handleBgChange',
    value: function handleBgChange() {
      var _props = this.props,
          background = _props.background,
          id = _props.id;


      this.props.onBgChange(background);
      this.props.onClickChange(id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          background = _props2.background,
          active = _props2.active;

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