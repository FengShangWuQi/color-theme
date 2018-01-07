'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeBg = exports.changeTheme = exports.changeType = exports.changeIndex = undefined;

var _actionTypes = require('./actionTypes');

var at = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var changeIndex = exports.changeIndex = function changeIndex(index) {
  return {
    type: at.CHANGEINDEX,
    index: index
  };
};

var changeType = exports.changeType = function changeType(type) {
  return {
    type: at.CHANGETYPE,
    data: type
  };
};

var changeTheme = exports.changeTheme = function changeTheme(theme) {
  return {
    type: at.CHANGETHEME,
    theme: theme
  };
};

var changeBg = exports.changeBg = function changeBg(bg) {
  return {
    type: at.CHANGEBG,
    bg: bg
  };
};
//# sourceMappingURL=actions.js.map