'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Constants = require('../utils/Constants');

var _Constants2 = _interopRequireDefault(_Constants);

var _actions = require('../actions/actions');

var _actions2 = _interopRequireDefault(_actions);

var _connect = require('react-redux/es/connect/connect');

var _connect2 = _interopRequireDefault(_connect);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _reactCookies = require('react-cookies');

var _reactCookies2 = _interopRequireDefault(_reactCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = (0, _socket2.default)('https://18.218.28.74:8000/');

/**
 * Component rendering Message Input field and Send Button.
 */
function MessageInput(props) {
  socket.on('chat', function (data) {
    props.updateChatFeed(data.name, data.message);
  });

  function sendMessage() {
    var chatInput = document.getElementsByClassName('chatBus-messageInput')[0].getElementsByTagName('input')[0];
    if (chatInput.value.trim() !== '') {
      socket.emit('chat', {
        message: chatInput.value,
        name: _reactCookies2.default.load('chatbus-username')
      });
      chatInput.value = '';
    }
    chatInput.focus();
  }

  function handleChatInput(event) {
    if (event.keyCode === 13) {
      sendMessage();
    }
  }

  return _react2.default.createElement(
    'div',
    { className: 'chatBus-message' },
    _react2.default.createElement(_Input2.default, {
      placeholder: _Constants2.default.CHAT_INPUT_PLACEHOLDER,
      className: 'chatBus-messageInput',
      autoFocus: true,
      onKeyUp: handleChatInput }),
    _react2.default.createElement(
      _Button2.default,
      {
        onClick: sendMessage,
        variant: 'contained',
        color: 'primary',
        className: 'chatBus-sendButton' },
      _Constants2.default.SEND_BUTTON_TEXT,
      _react2.default.createElement(
        _Icon2.default,
        { className: 'chatBus-sendIcon' },
        'send'
      )
    )
  );
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateChatFeed: function updateChatFeed(user, message) {
      dispatch((0, _actions2.default)(user, message));
    }
  };
};

exports.default = (0, _connect2.default)(null, mapDispatchToProps)(MessageInput);