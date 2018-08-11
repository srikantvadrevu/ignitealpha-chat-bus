"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _NameDialogBox = require("./NameDialogBox");

var _NameDialogBox2 = _interopRequireDefault(_NameDialogBox);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _ChatFeed = require("./ChatFeed");

var _ChatFeed2 = _interopRequireDefault(_ChatFeed);

var _MessageInput = require("./MessageInput");

var _MessageInput2 = _interopRequireDefault(_MessageInput);

var _connect = require("react-redux/es/connect/connect");

var _connect2 = _interopRequireDefault(_connect);

var _reactCookies = require("react-cookies");

var _reactCookies2 = _interopRequireDefault(_reactCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Container for chatbus application. Diplays name dialog box if user hasen't entered name,
 * else displays home screen.
 */
function ChatBusContainer(props) {
  var content = void 0;
  if (_reactCookies2.default.load('chatbus-username')) {
    content = _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(_ChatFeed2.default, null),
      _react2.default.createElement(_MessageInput2.default, null)
    );
  } else {
    content = _react2.default.createElement(_NameDialogBox2.default, null);
  }
  return _react2.default.createElement(
    "div",
    { className: "chatBus-application" },
    content
  );
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    name: state.chatBusState.name
  };
};

exports.default = (0, _connect2.default)(mapStateToProps, null)(ChatBusContainer);