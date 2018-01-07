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

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactColor = require('react-color');

var _actions = require('./actions');

var Actions = _interopRequireWildcard(_actions);

var _ColorThemeItem = require('./components/ColorThemeItem');

var _ColorThemeItem2 = _interopRequireDefault(_ColorThemeItem);

var _BackgroundItem = require('./components/BackgroundItem');

var _BackgroundItem2 = _interopRequireDefault(_BackgroundItem);

require('./style.css');

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

var ColorTheme = function (_Component) {
  (0, _inherits3.default)(ColorTheme, _Component);

  function ColorTheme() {
    (0, _classCallCheck3.default)(this, ColorTheme);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ColorTheme.__proto__ || (0, _getPrototypeOf2.default)(ColorTheme)).call(this));

    _this.handleColorChange = function (id, colorArr) {
      var _this$props = _this.props,
          type = _this$props.type,
          actions = _this$props.actions;


      _this.props.onhandleColorChange(type, id, colorArr);
      actions.changeTheme(colorArr);
      _this.setState({
        colorArr: colorArr
      });
    };

    _this.handleBgChange = function (id, bgColor) {
      var _this$props2 = _this.props,
          type = _this$props2.type,
          actions = _this$props2.actions;


      _this.props.onhandleBgChange(type, id, bgColor);
      actions.changeBg(bgColor);
    };

    _this.handleClick = function (id) {
      var _this$props3 = _this.props,
          type = _this$props3.type,
          actions = _this$props3.actions;


      actions.changeType(type);
      actions.changeIndex(id);
    };

    _this.handleAddColor = function (colorArr) {
      _this.setState({
        colorArr: colorArr,
        pickerVisible: true,
        overlayVisible: 'block'
      });
    };

    _this.handleDeleteColor = function (colors) {
      var _this$props4 = _this.props,
          type = _this$props4.type,
          colorTheme = _this$props4.colorTheme,
          actions = _this$props4.actions;

      var _colorTheme$toJS = colorTheme.toJS(),
          index = _colorTheme$toJS.index;

      var colorArr = _this.state.colorArr;


      for (var i = colorArr.length - 1; i >= 0; i--) {
        if (colors.indexOf(i) !== -1) {
          colorArr.splice(i, 1);
        }
      }

      _this.props.onhandleColorChange(type, index, colorArr);
      actions.changeTheme(colorArr);
      _this.setState({
        colorArr: colorArr
      });
    };

    _this.handleAccept = function () {
      var _this$props5 = _this.props,
          type = _this$props5.type,
          colorTheme = _this$props5.colorTheme,
          actions = _this$props5.actions;

      var _colorTheme$toJS2 = colorTheme.toJS(),
          index = _colorTheme$toJS2.index;

      var _this$state = _this.state,
          colorArr = _this$state.colorArr,
          pickerColor = _this$state.pickerColor;

      colorArr.push(pickerColor);

      _this.props.onhandleColorChange(type, index, colorArr);
      actions.changeTheme(colorArr);
      _this.setState({
        colorArr: colorArr,
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
      var _this$props6 = _this.props,
          active = _this$props6.active,
          type = _this$props6.type,
          colorTheme = _this$props6.colorTheme;

      var _colorTheme$toJS3 = colorTheme.toJS(),
          index = _colorTheme$toJS3.index;

      return _this.props.theme.map(function (curr, i) {
        return _react2.default.createElement(_ColorThemeItem2.default, {
          key: i,
          id: i,
          active: active && i === index,
          disRemove: _this.state.pickerVisible,
          color: curr.color,
          background: type === 'theme' ? curr.background : '',
          onColorChange: _this.handleColorChange,
          onBgChange: _this.handleBgChange,
          onAddChange: _this.handleAddColor,
          onDeleteChange: _this.handleDeleteColor,
          onClickChange: _this.handleClick
        });
      });
    };

    _this.renderBg = function () {
      var _this$props7 = _this.props,
          colorTheme = _this$props7.colorTheme,
          active = _this$props7.active;

      var _colorTheme$toJS4 = colorTheme.toJS(),
          index = _colorTheme$toJS4.index;

      return _this.props.theme.map(function (color, i) {
        return _react2.default.createElement(_BackgroundItem2.default, {
          key: i,
          id: i,
          active: active && i === index,
          background: color,
          onBgChange: _this.handleBgChange,
          onClickChange: _this.handleClick
        });
      });
    };

    _this.state = {
      pickerVisible: false,
      colorArr: [],
      pickerColor: '#D87C7C',
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
  colorTheme: _propTypes2.default.object.isRequired,
  actions: _propTypes2.default.object.isRequired
};
ColorTheme.defaultProps = {
  active: false
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ColorTheme);
//# sourceMappingURL=ColorTheme.js.map