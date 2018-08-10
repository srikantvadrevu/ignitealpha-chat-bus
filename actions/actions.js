"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendMessage;
exports.updateUserName = updateUserName;

var _Constants = require("../utils/Constants");

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendMessage(name, message) {
  return {
    type: _Constants2.default.SEND_MESSAGE,
    data: {
      name: name,
      message: message
    }
  };
}

function updateUserName(name) {
  return {
    type: _Constants2.default.UPDATE_USER_NAME,
    data: {
      name: name
    }
  };
}