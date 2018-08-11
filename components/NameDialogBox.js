'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = require('@material-ui/core/DialogActions');

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogTitle = require('@material-ui/core/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _Constants = require('../utils/Constants');

var _Constants2 = _interopRequireDefault(_Constants);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _actions = require('../actions/actions');

var _connect = require('react-redux/es/connect/connect');

var _connect2 = _interopRequireDefault(_connect);

var _reactCookies = require('react-cookies');

var _reactCookies2 = _interopRequireDefault(_reactCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component rendering name dialog box.
 */
var NameDialogBox = function (_React$Component) {
  _inherits(NameDialogBox, _React$Component);

  function NameDialogBox(props) {
    _classCallCheck(this, NameDialogBox);

    var _this = _possibleConstructorReturn(this, (NameDialogBox.__proto__ || Object.getPrototypeOf(NameDialogBox)).call(this, props));

    _this.handleSave = _this.handleSave.bind(_this);
    _this.handleNameInput = _this.handleNameInput.bind(_this);
    return _this;
  }

  _createClass(NameDialogBox, [{
    key: 'handleSave',
    value: function handleSave() {
      var nameInput = document.getElementsByClassName('chatBus-nameInput')[0].getElementsByTagName('input')[0];
      this.props.updateName(nameInput.value);
      _reactCookies2.default.save('chatbus-username', nameInput.value, { maxAge: 21600 });
      this.setState({ open: false });
    }
  }, {
    key: 'handleNameInput',
    value: function handleNameInput(event) {
      if (event.keyCode === 13) {
        this.handleSave();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Dialog2.default,
        {
          open: true,
          onClose: this.handleSave,
          'aria-labelledby': 'ChatBus Name Dialog',
          'aria-describedby': 'ChatBus Name Dialog'
        },
        _react2.default.createElement(
          _DialogTitle2.default,
          { id: 'chatBus-nameDialogTitle' },
          _Constants2.default.NAME_DIALOG_TITLE
        ),
        _react2.default.createElement(
          _DialogContent2.default,
          null,
          _react2.default.createElement(_Input2.default, {
            placeholder: _Constants2.default.NAME_INPUT_PLACEHOLDER,
            className: 'chatBus-nameInput',
            onKeyUp: this.handleNameInput,
            autoFocus: true })
        ),
        _react2.default.createElement(
          _DialogActions2.default,
          null,
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.handleSave, color: 'primary' },
            _Constants2.default.SAVE_BUTTON_TEXT
          )
        )
      );
    }
  }]);

  return NameDialogBox;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateName: function updateName(name) {
      dispatch((0, _actions.updateUserName)(name));
    }
  };
};

exports.default = (0, _connect2.default)(null, mapDispatchToProps)(NameDialogBox);