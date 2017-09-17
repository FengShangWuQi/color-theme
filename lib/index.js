'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactColor = require('react-color');

require('./style.css');

var _ColorThemeItem = require('./ColorThemeItem');

var _ColorThemeItem2 = _interopRequireDefault(_ColorThemeItem);

var _BackgroundItem = require('./BackgroundItem');

var _BackgroundItem2 = _interopRequireDefault(_BackgroundItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorTheme = function (_Component) {
  _inherits(ColorTheme, _Component);

  function ColorTheme() {
    _classCallCheck(this, ColorTheme);

    var _this = _possibleConstructorReturn(this, (ColorTheme.__proto__ || Object.getPrototypeOf(ColorTheme)).call(this));

    _this.handleColorChange = function (colorArr) {
      var type = _this.props.type;


      _this.props.onhandleColorChange(colorArr);
      _this.props.onhandleClick(type);

      _this.setState({
        colorArr: colorArr,
        selected: ''
      });
    };

    _this.handleBgChange = function (bgColor) {
      _this.props.onhandleBgChange(bgColor);
      _this.props.onhandleClick(_this.props.type);

      _this.setState({
        selected: ''
      });
    };

    _this.handleClickColor = function (key) {
      _this.setState({
        selected: key
      });
    };

    _this.handleAddColor = function (colorArr) {
      _this.setState({
        colorArr: colorArr,
        pickerVisible: true,
        overlayVisible: 'block'
      });
    };

    _this.handleDeleteColor = function (colors) {
      var colorArr = _this.state.colorArr;


      _lodash2.default.remove(colorArr, function (curr, index) {
        return colors.indexOf(index) !== -1;
      });
      _this.props.onhandleColorChange(colorArr);
    };

    _this.handleAccept = function () {
      var _this$state = _this.state,
          colorArr = _this$state.colorArr,
          pickerColor = _this$state.pickerColor;


      colorArr.push(pickerColor);
      _this.props.onhandleColorChange(colorArr);
      _this.setState({
        pickerVisible: false,
        overlayVisible: 'none'
      });
    };

    _this.handleCancel = function () {
      _this.setState({
        pickerVisible: false,
        overlayVisible: 'none'
      });
    };

    _this.handleChangeComplete = function (color) {
      _this.setState({
        pickerColor: color.hex
      });
    };

    _this.renderColorTheme = function () {
      var _this$props = _this.props,
          active = _this$props.active,
          type = _this$props.type;


      return _this.props.theme.map(function (curr, index) {
        return _react2.default.createElement(_ColorThemeItem2.default, {
          key: index,
          id: index,
          active: active && index === _this.state.selected,
          disRemove: _this.state.pickerVisible,
          color: curr.color,
          backgroundColor: type === 'theme' ? curr.backgroundColor : '',
          onColorChange: _this.handleColorChange,
          onBgChange: _this.handleBgChange,
          onAddChange: _this.handleAddColor,
          onDeleteChange: _this.handleDeleteColor,
          onClickChange: _this.handleClickColor
        });
      });
    };

    _this.renderBg = function () {
      return _this.props.theme.map(function (color, index) {
        return _react2.default.createElement(_BackgroundItem2.default, {
          key: index,
          id: index,
          active: _this.props.active && index === _this.state.selected,
          background: color,
          onBgChange: _this.handleBgChange,
          onClickChange: _this.handleClickColor
        });
      });
    };

    _this.state = {
      pickerVisible: false,
      colorArr: [],
      pickerColor: '#D87C7C',
      selected: '',
      overlayVisible: 'none'
    };
    return _this;
  }

  /** 处理颜色 */


  /** 处理背景 */


  /** 处理点击 */


  /** 增加色块 */


  /** 删除色块 */


  /** 处理颜色选择器选择 */


  /** 处理颜色选择器取消 */


  /** 处理颜色选择器修改 */


  /** 渲染主题 */


  /** 渲染背景 */


  _createClass(ColorTheme, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          pickerColor = _state.pickerColor,
          pickerVisible = _state.pickerVisible,
          overlayVisible = _state.overlayVisible;


      return _react2.default.createElement(
        'div',
        { className: 'color-theme' },
        _react2.default.createElement(
          'ul',
          { className: 'theme-ul' },
          this.props.type === 'bg' ? this.renderBg() : this.renderColorTheme()
        ),
        _react2.default.createElement(
          'div',
          { className: 'color-picker', style: { display: pickerVisible ? 'block' : 'none' } },
          _react2.default.createElement(_reactColor.PhotoshopPicker, {
            color: pickerColor,
            header: '\u989C\u8272\u9009\u62E9\u5668',
            onAccept: this.handleAccept,
            onCancel: this.handleCancel,
            onChangeComplete: this.handleChangeComplete
          })
        ),
        _react2.default.createElement('div', { style: { display: overlayVisible }, className: 'overlay' })
      );
    }
  }]);

  return ColorTheme;
}(_react.Component);

ColorTheme.propTypes = {
  type: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.array.isRequired,
  active: _propTypes2.default.bool,
  onhandleColorChange: _propTypes2.default.func,
  onhandleBgChange: _propTypes2.default.func,
  onhandleClick: _propTypes2.default.func
};
ColorTheme.defaultProps = {
  active: false
};
exports.default = ColorTheme;
//# sourceMappingURL=index.js.map