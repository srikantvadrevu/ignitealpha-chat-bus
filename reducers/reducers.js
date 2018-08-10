"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chatBusReducers = undefined;

var _Constants = require("../utils/Constants");

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Chatbus application reducers.
 */
var chatBusReducers = function chatBusReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    messages: [],
    name: ''
  };
  var action = arguments[1];

  var newState = Object.assign({}, state);
  switch (action.type) {
    case _Constants2.default.SEND_MESSAGE:
      newState.messages = [].concat(_toConsumableArray(state.messages), [{ name: action.data.name, message: action.data.message }]);
      return newState;

    case _Constants2.default.UPDATE_USER_NAME:
      newState.name = action.data.name;
      return newState;

    default:
      return state;
  }
};

exports.chatBusReducers = chatBusReducers;