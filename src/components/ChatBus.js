import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {chatBusReducers} from "../reducers/reducers";
import Header from "./Header";
import MessageInput from "./MessageInput";
import ChatFeed from "./ChatFeed";

const reducers = combineReducers({chatBusState: chatBusReducers});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class ChatBus extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="chatBus-application">
          <Header/>
          <ChatFeed/>
          <MessageInput/>
        </div>
      </Provider>
    )
  }
}

export default ChatBus;
