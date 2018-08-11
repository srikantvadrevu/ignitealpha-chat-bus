"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Grid = require("@material-ui/core/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _Card = require("@material-ui/core/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardContent = require("@material-ui/core/CardContent");

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Typography = require("@material-ui/core/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Message(props) {
  return _react2.default.createElement(
    _Grid2.default,
    { item: true, className: 'chatBus-chatFeedItem' },
    _react2.default.createElement(
      _Card2.default,
      null,
      _react2.default.createElement(
        _CardContent2.default,
        { className: 'chatBus-chatFeedItemContent' },
        _react2.default.createElement(
          _Typography2.default,
          { className: 'chatBus-chatFeedItemName', variant: "body2" },
          props.name
        ),
        _react2.default.createElement(
          _Typography2.default,
          { className: 'chatBus-chatFeedItemMessage', variant: "body1" },
          props.message
        )
      )
    )
  );
}

Message.propTypes = {
  name: _propTypes2.default.string,
  message: _propTypes2.default.string
};

exports.default = Message;