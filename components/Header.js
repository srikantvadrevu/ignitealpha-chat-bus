"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AppBar = require("@material-ui/core/AppBar/AppBar");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Constants = require("../utils/Constants");

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component rendering Header of the application.
 */
function Header() {
  return _react2.default.createElement(
    _AppBar2.default,
    { className: 'chatBus-header' },
    _Constants2.default.TITLE
  );
}

exports.default = Header;