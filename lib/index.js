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

    _this.handleColorChange = _this.handleColorChange.bind(_this);
    _this.handleBgChange = _this.handleBgChange.bind(_this);
    _this.handleClickColor = _this.handleClickColor.bind(_this);
    _this.handleAddColor = _this.handleAddColor.bind(_this);
    _this.handleDeleteColor = _this.handleDeleteColor.bind(_this);
    _this.handleAccept = _this.handleAccept.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.handleChangeComplete = _this.handleChangeComplete.bind(_this);
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


  _createClass(ColorTheme, [{
    key: 'handleColorChange',
    value: function handleColorChange(colorArr) {
      var type = this.props.type;


      this.props.onhandleColorChange(colorArr);
      this.props.onhandleClick(type);

      this.setState({
        colorArr: colorArr,
        selected: ''
      });
    }

    /** 处理背景 */

  }, {
    key: 'handleBgChange',
    value: function handleBgChange(bgColor) {
      this.props.onhandleBgChange(bgColor);
      this.props.onhandleClick(this.props.type);

      this.setState({
        selected: ''
      });
    }

    /** 处理点击 */

  }, {
    key: 'handleClickColor',
    value: function handleClickColor(key) {
      this.setState({
        selected: key
      });
    }

    /** 增加色块 */

  }, {
    key: 'handleAddColor',
    value: function handleAddColor(colorArr) {
      this.setState({
        colorArr: colorArr,
        pickerVisible: true,
        overlayVisible: 'block'
      });
    }

    /** 删除色块 */

  }, {
    key: 'handleDeleteColor',
    value: function handleDeleteColor(colors) {
      var colorArr = this.state.colorArr;


      _lodash2.default.remove(colorArr, function (curr, index) {
        return colors.indexOf(index) !== -1;
      });
      this.props.onhandleColorChange(colorArr);
    }

    /** 处理颜色选择器选择 */

  }, {
    key: 'handleAccept',
    value: function handleAccept() {
      var _state = this.state,
          colorArr = _state.colorArr,
          pickerColor = _state.pickerColor;


      colorArr.push(pickerColor);
      this.props.onhandleColorChange(colorArr);
      this.setState({
        pickerVisible: false,
        overlayVisible: 'none'
      });
    }

    /** 处理颜色选择器取消 */

  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.setState({
        pickerVisible: false,
        overlayVisible: 'none'
      });
    }

    /** 处理颜色选择器修改 */

  }, {
    key: 'handleChangeComplete',
    value: function handleChangeComplete(color) {
      this.setState({
        pickerColor: color.hex
      });
    }

    /** 渲染主题 */

  }, {
    key: 'renderColorTheme',
    value: function renderColorTheme() {
      var _this2 = this;

      var _props = this.props,
          active = _props.active,
          type = _props.type;


      return this.props.theme.map(function (curr, index) {
        return _react2.default.createElement(_ColorThemeItem2.default, {
          key: index,
          id: index,
          active: active && index === _this2.state.selected,
          disRemove: _this2.state.pickerVisible,
          color: curr.color,
          backgroundColor: type === 'theme' ? curr.backgroundColor : '',
          onColorChange: _this2.handleColorChange,
          onBgChange: _this2.handleBgChange,
          onAddChange: _this2.handleAddColor,
          onDeleteChange: _this2.handleDeleteColor,
          onClickChange: _this2.handleClickColor
        });
      });
    }

    /** 渲染背景 */

  }, {
    key: 'renderBg',
    value: function renderBg() {
      var _this3 = this;

      return this.props.theme.map(function (color, index) {
        return _react2.default.createElement(_BackgroundItem2.default, {
          key: index,
          id: index,
          active: _this3.props.active && index === _this3.state.selected,
          background: color,
          onBgChange: _this3.handleBgChange,
          onClickChange: _this3.handleClickColor
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          pickerColor = _state2.pickerColor,
          pickerVisible = _state2.pickerVisible,
          overlayVisible = _state2.overlayVisible;


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