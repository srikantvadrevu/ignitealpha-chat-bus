import React from 'react';
import Input from "@material-ui/core/Input";
//<i className="material-icons chatBus-sendIcon">send</i>
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

function MessageInput(){
  return (
    <div className={'chatBus-Message'}>
    <Input placeholder={'Say Hi !!'} className={'chatBus-MessageInput'}/>

      <Button variant="contained" color="primary" className={'chatBus-sendButton'}>
        Send
        <Icon className={'chatBus-sendIcon'} >send</Icon>
      </Button>
    </div>);
}

export default MessageInput;
