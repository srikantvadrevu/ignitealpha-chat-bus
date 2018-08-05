import React from 'react';
import NameDialogBox from "./NameDialogBox";
import Header from "./Header";
import ChatFeed from "./ChatFeed";
import MessageInput from "./MessageInput";
import connect from "react-redux/es/connect/connect";
import cookie from 'react-cookies'

/**
 * Container for chatbus application. Diplays name dialog box if user hasen't entered name,
 * else displays home screen.
 */
function ChatBusContainer(props) {
  let content;
  if (cookie.load('chatbus-username')) {
    content = (
      <div>
        <Header/>
        <ChatFeed/>
        <MessageInput/>
      </div>
    );
  } else {
    content = <NameDialogBox/>;
  }
  return (
    <div className="chatBus-application">
      {content}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.chatBusState.name
  }
};

export default connect(mapStateToProps, null)(ChatBusContainer);