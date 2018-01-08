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

var _ColorItem = require('../ColorItem');

var _ColorItem2 = _interopRequireDefault(_ColorItem);

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

var ColorThemeItem = function (_Component) {
  (0, _inherits3.default)(ColorThemeItem, _Component);

  function ColorThemeItem(props) {
    (0, _classCallCheck3.default)(this, ColorThemeItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ColorThemeItem.__proto__ || (0, _getPrototypeOf2.default)(ColorThemeItem)).call(this, props));

    _this.handleThemeChange = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          color = _this$props.color,
          background = _this$props.background,
          disRemove = _this$props.disRemove;
      var isRemove = _this.state.isRemove;


      if (!(!disRemove && isRemove)) {
        _this.props.onClickChange(id);
        _this.props.onColorChange(id, color);
        if (background) {
          _this.props.onBgChange(id, background);
        }
      }
    };

    _this.handleAdd = function (e) {
      var isRemove = _this.state.isRemove;

      if (!isRemove) {
        _this.props.onAddChange(_this.props.color);
      }
      if (!_this.props.disRemove && isRemove) {
        e.stopPropagation();
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

    _this.handleDelete = function (e) {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          colorTheme = _this$props2.colorTheme;

      var _colorTheme$toJS = colorTheme.toJS(),
          index = _colorTheme$toJS.index;

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
      if (id === index) {
        e.stopPropagation();
      }
    };

    _this.state = {
      NUM: _this.props.color.length,
      isRemove: false,
      removeItems: []
    };
    return _this;
  }

  (0, _createClass3.default)(ColorThemeItem, [{
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
          background = _props.background,
          active = _props.active,
          disRemove = _props.disRemove;
      var _state = this.state,
          isRemove = _state.isRemove,
          NUM = _state.NUM;


      var liStyle = active ? (0, _assign2.default)({
        height: 'auto'
      }, (0, _utils.getSelectedStyle)()) : { height: '31px' };
      var oneSetTheme = color.map(function (curr, index) {
        return _react2.default.createElement(_ColorItem2.default, {
          key: index,
          id: index,
          color: curr,
          isDelete: background === '' || !!(index > NUM - 1),
          isRemove: isRemove && !disRemove,
          onDeleteChange: _this2.handleDeleteChange,
          onCancelDelete: _this2.handleCancelDelete
        });
      });

      return _react2.default.createElement(
        'li',
        {
          className: 'colorTheme-li',
          style: (0, _assign2.default)({ background: background }, liStyle),
          onClick: this.handleThemeChange
        },
        oneSetTheme,
        _react2.default.createElement(
          'span',
          {
            className: 'colorTheme-li-span colorTheme-li-icon',
            onClick: function onClick(e) {
              return _this2.handleAdd(e);
            }
          },
          '+'
        ),
        _react2.default.createElement(
          'span',
          {
            className: 'colorTheme-li-span colorTheme-li-icon',
            onClick: function onClick(e) {
              return _this2.handleDelete(e);
            },
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
  background: _propTypes2.default.string.isRequired,
  onColorChange: _propTypes2.default.func.isRequired,
  onBgChange: _propTypes2.default.func.isRequired,
  onAddChange: _propTypes2.default.func.isRequired,
  onDeleteChange: _propTypes2.default.func.isRequired,
  onClickChange: _propTypes2.default.func.isRequired,
  actions: _propTypes2.default.object.isRequired
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ColorThemeItem);
//# sourceMappingURL=index.js.map