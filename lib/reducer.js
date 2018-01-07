'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _actionTypes = require('./actionTypes');

var at = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var INITIAL_STATE = (0, _immutable.fromJS)({
  type: '',
  index: '',
  theme: [],
  bg: ''
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case at.CHANGETYPE:
      return state.set('type', (0, _immutable.fromJS)(action.data));
    case at.CHANGEINDEX:
      return state.set('index', (0, _immutable.fromJS)(action.index));
    case at.CHANGETHEME:
      return state.set('theme', (0, _immutable.fromJS)(action.theme));
    case at.CHANGEBG:
      return state.set('bg', (0, _immutable.fromJS)(action.bg));
    default:
      return state;
  }
};
//# sourceMappingURL=reducer.js.map