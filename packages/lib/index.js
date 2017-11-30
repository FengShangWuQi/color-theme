'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactColor = require('react-color');

var _ColorThemeItem = require('./ColorThemeItem');

var _ColorThemeItem2 = _interopRequireDefault(_ColorThemeItem);

var _BackgroundItem = require('./BackgroundItem');

var _BackgroundItem2 = _interopRequireDefault(_BackgroundItem);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorTheme = function (_Component) {
  (0, _inherits3.default)(ColorTheme, _Component);

  function ColorTheme() {
    (0, _classCallCheck3.default)(this, ColorTheme);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ColorTheme.__proto__ || (0, _getPrototypeOf2.default)(ColorTheme)).call(this));

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


      for (var i = colorArr.length - 1; i >= 0; i--) {
        if (colors.indexOf(i) !== -1) {
          colorArr.splice(i, 1);
        }
      }
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

  (0, _createClass3.default)(ColorTheme, [{
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
          {
            className: 'color-picker',
            style: { display: pickerVisible ? 'block' : 'none' }
          },
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