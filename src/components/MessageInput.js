import React from 'react';
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Constants from '../utils/Constants';

/**
 * Component rendering Message Input field and Send Button.
 */
function MessageInput() {
  return (
    <div className={'chatBus-message'}>
      <Input placeholder={Constants.CHAT_INPUT_PLACEHOLDER} className={'chatBus-messageInput'}/>
      <Button variant="contained" color="primary" className={'chatBus-sendButton'}>
        {Constants.SEND_BUTTON_TEXT}
        <Icon className={'chatBus-sendIcon'}>send</Icon>
      </Button>
    </div>);
}

export default MessageInput;
