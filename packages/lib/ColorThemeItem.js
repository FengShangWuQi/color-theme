'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

require('./style.css');

var _ColorItem = require('./ColorItem');

var _ColorItem2 = _interopRequireDefault(_ColorItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorThemeItem = function (_Component) {
  _inherits(ColorThemeItem, _Component);

  function ColorThemeItem(props) {
    _classCallCheck(this, ColorThemeItem);

    var _this = _possibleConstructorReturn(this, (ColorThemeItem.__proto__ || Object.getPrototypeOf(ColorThemeItem)).call(this, props));

    _this.handleThemeChange = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          color = _this$props.color,
          backgroundColor = _this$props.backgroundColor;


      _this.props.onColorChange(color);
      if (!!backgroundColor) {
        _this.props.onBgChange(backgroundColor);
      }
      _this.props.onClickChange(id);
    };

    _this.handleAdd = function () {
      if (!_this.state.isRemove) {
        _this.props.onAddChange(_this.props.color);
      }
    };

    _this.handleDeleteChange = function (key) {
      var removeItems = _this.state.removeItems;


      removeItems.push(key);
      _this.setState({
        removeItems: removeItems
      });
    };

    _this.handleCancelDelete = function (key) {
      var removeItems = _this.state.removeItems;


      var index = removeItems.indexOf(key);
      if (index !== -1) {
        removeItems.splice(index, 1);
        _this.setState({
          removeItems: removeItems
        });
      }
    };

    _this.handleDelete = function () {
      var _this$state = _this.state,
          isRemove = _this$state.isRemove,
          removeItems = _this$state.removeItems;


      if (isRemove && removeItems.length !== 0) {
        _this.props.onDeleteChange(removeItems);
        _this.setState({
          removeItems: []
        });
      }
      if (!_this.props.disRemove) {
        _this.setState({
          isRemove: !isRemove
        });
      }
    };

    _this.state = {
      NUM: _this.props.color.length,
      isRemove: false,
      removeItems: []
    };
    return _this;
  }

  _createClass(ColorThemeItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.props.active) {
        this.setState({
          isRemove: false,
          removeItems: []
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          color = _props.color,
          backgroundColor = _props.backgroundColor,
          active = _props.active,
          disRemove = _props.disRemove;
      var _state = this.state,
          isRemove = _state.isRemove,
          NUM = _state.NUM;


      var liStyle = active ? Object.assign({
        height: 'auto',
        backgroundColor: backgroundColor
      }, _constants.SELECTSTYLE) : { height: '31px', backgroundColor: backgroundColor };
      var oneSetTheme = color.map(function (curr, index) {
        return _react2.default.createElement(_ColorItem2.default, {
          key: index,
          id: index,
          color: curr,
          isDelete: backgroundColor === '' || !!(index > NUM - 1),
          isRemove: isRemove && !disRemove,
          onDeleteChange: _this2.handleDeleteChange,
          onCancelDelete: _this2.handleCancelDelete
        });
      });

      return _react2.default.createElement(
        'li',
        {
          className: 'colorTheme-li',
          style: liStyle,
          onClick: this.handleThemeChange
        },
        oneSetTheme,
        _react2.default.createElement(
          'span',
          {
            className: 'colorTheme-li-span colorTheme-li-icon',
            onClick: this.handleAdd
          },
          '+'
        ),
        _react2.default.createElement(
          'span',
          {
            className: 'colorTheme-li-span colorTheme-li-icon',
            onClick: this.handleDelete,
            style: isRemove ? { color: '#fff', background: '#424242' } : null
          },
          '-'
        )
      );
    }
  }]);

  return ColorThemeItem;
}(_react.Component);

ColorThemeItem.propTypes = {
  id: _propTypes2.default.number.isRequired,
  active: _propTypes2.default.bool.isRequired,
  disRemove: _propTypes2.default.bool.isRequired,
  color: _propTypes2.default.array.isRequired,
  backgroundColor: _propTypes2.default.string.isRequired,
  onColorChange: _propTypes2.default.func.isRequired,
  onBgChange: _propTypes2.default.func.isRequired,
  onAddChange: _propTypes2.default.func.isRequired,
  onDeleteChange: _propTypes2.default.func.isRequired,
  onClickChange: _propTypes2.default.func.isRequired
};
exports.default = ColorThemeItem;
//# sourceMappingURL=ColorThemeItem.js.map