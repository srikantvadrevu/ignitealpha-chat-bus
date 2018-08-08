import React from 'react';
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Constants from '../utils/Constants';
import sendMessage from "../actions/actions";
import connect from "react-redux/es/connect/connect";
import io from 'socket.io-client';
import cookie from "react-cookies";

const userName = cookie.load('chatbus-username');
const socket = io('http://localhost:8000');

/**
 * Component rendering Message Input field and Send Button.
 */
function MessageInput(props) {
  socket.on('chat', function (data) {
    props.updateChatFeed(data.name, data.message);
  });

  function sendMessage() {
    let chatInput = document.getElementsByClassName('chatBus-messageInput')[0].getElementsByTagName('input')[0];
    if (chatInput.value.trim() !== '') {
      socket.emit('chat', {
        message: chatInput.value,
        name: userName
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

  return (
    <div className={'chatBus-message'}>
      <Input
        placeholder={Constants.CHAT_INPUT_PLACEHOLDER}
        className={'chatBus-messageInput'}
        autoFocus
        onKeyUp={handleChatInput}/>
      <Button
        onClick={sendMessage}
        variant="contained"
        color="primary"
        className={'chatBus-sendButton'}>
        {Constants.SEND_BUTTON_TEXT}
        <Icon className={'chatBus-sendIcon'}>send</Icon>
      </Button>
    </div>);
}

const mapDispatchToProps = (dispatch) => ({
  updateChatFeed: (user, message) => {
    dispatch(sendMessage(user, message))
  }
});

export default connect(null, mapDispatchToProps)(MessageInput);