'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./assets/index.css');

var _ChatBus = require('./components/ChatBus');

var _ChatBus2 = _interopRequireDefault(_ChatBus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_ChatBus2.default, null), document.getElementById('root'));