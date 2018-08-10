'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component rendering live chat feed.
 */
var ChatFeed = function (_React$Component) {
  _inherits(ChatFeed, _React$Component);

  function ChatFeed() {
    _classCallCheck(this, ChatFeed);

    return _possibleConstructorReturn(this, (ChatFeed.__proto__ || Object.getPrototypeOf(ChatFeed)).apply(this, arguments));
  }

  _createClass(ChatFeed, [{
    key: 'render',
    value: function render() {
      var messages = [];
      var i = 0;
      this.props.messages.forEach(function (message) {
        messages.push(_react2.default.createElement(_Message2.default, { key: i, name: message.name, message: message.message }));
        i++;
      });
      return _react2.default.createElement(
        _Grid2.default,
        { container: true, className: 'chatBus-chatFeed' },
        messages
      );
    }
  }]);

  return ChatFeed;
}(_react2.default.Component);

ChatFeed.propTypes = {
  messages: _propTypes2.default.array
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.chatBusState.messages
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ChatFeed);