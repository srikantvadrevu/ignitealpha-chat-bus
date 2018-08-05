import React from 'react';
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Constants from '../utils/Constants';
import sendMessage from "../actions/actions";
import connect from "react-redux/es/connect/connect";

/**
 * Component rendering Message Input field and Send Button.
 */
function MessageInput(props) {

  function sendMessage() {
    let chatInput = document.getElementsByClassName('chatBus-messageInput')[0].getElementsByTagName('input')[0];
    if (chatInput.value.trim() !== '') {
      props.sendMessage(chatInput.value);
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
  sendMessage: (message) => {
    dispatch(sendMessage(Constants.YOU, message))
  }
});

const mapStateToProps = (state) => {
  return {
    messages: state.chatBusState.messages
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);