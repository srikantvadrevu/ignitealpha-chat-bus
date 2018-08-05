import Grid from '@material-ui/core/Grid';
import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Message from "./Message";

/**
 * Component rendering live chat feed.
 */
class ChatFeed extends React.Component {
  render() {
    let messages = [];
    let i = 0;
    this.props.messages.forEach(function (message) {
      messages.push(<Message key={i} name={message.name} message={message.message}/>);
      i++;
    });
    return (
      <Grid container className={'chatBus-chatFeed'}>
        {messages}
      </Grid>
    );
  }
}

ChatFeed.propTypes = {
  messages: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    messages: state.chatBusState.messages
  }
};

export default connect(mapStateToProps)(ChatFeed);