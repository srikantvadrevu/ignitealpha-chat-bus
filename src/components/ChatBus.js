import React, {Component} from 'react';
import Header from './Header';
import MessageInput from "./MessageInput";
import ChatFeed from "./ChatFeed";

/**
 * Root component of the application.
 */
class ChatBus extends Component {
  render() {
    return (
      <div className="chatBus-application">
        <Header/>
        <ChatFeed/>
        <MessageInput/>
      </div>
    );
  }
}

export default ChatBus;
