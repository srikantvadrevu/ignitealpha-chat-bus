import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Constants from "../utils/Constants";
import Input from "@material-ui/core/Input";
import {updateUserName} from "../actions/actions";
import connect from "react-redux/es/connect/connect";
import cookie from 'react-cookies'

/**
 * Component rendering name dialog box.
 */
class NameDialogBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
  }

  handleSave() {
    let nameInput = document.getElementsByClassName('chatBus-nameInput')[0].getElementsByTagName('input')[0];
    this.props.updateName(nameInput.value);
    cookie.save('chatbus-username', nameInput.value, {maxAge: 21600});
    this.setState({open: false});
  };

  handleNameInput(event) {
    if (event.keyCode === 13) {
      this.handleSave();
    }
  };

  render() {
    return (
      <Dialog
        open={true}
        onClose={this.handleSave}
        aria-labelledby="ChatBus Name Dialog"
        aria-describedby="ChatBus Name Dialog"
      >
        <DialogTitle id="chatBus-nameDialogTitle">{Constants.NAME_DIALOG_TITLE}</DialogTitle>
        <DialogContent>
          <Input
            placeholder={Constants.NAME_INPUT_PLACEHOLDER}
            className={'chatBus-nameInput'}
            onKeyUp={this.handleNameInput}
            autoFocus/>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSave} color="primary">
            {Constants.SAVE_BUTTON_TEXT}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => {
    dispatch(updateUserName(name))
  }
});

export default connect(null, mapDispatchToProps)(NameDialogBox);