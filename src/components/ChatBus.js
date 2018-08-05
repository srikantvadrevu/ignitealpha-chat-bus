import React, {Component} from 'react';
import Header from './Header';
import MessageInput from "./MessageInput";
import ChatFeed from "./ChatFeed";
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {chatBusReducers} from './../reducers/reducers';
import thunk from 'redux-thunk';

/**
 * Root component of the application.
 */
class ChatBus extends Component {

  render() {
    const reducers = combineReducers({
      chatBusReducers: chatBusReducers
    });

    /* eslint-disable no-underscore-dangle */
    const store = createStore(
      reducers,
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk)
      );
    /* eslint-enable */

    return (
      <Provider store={store}>
        <div className="chatBus-application">
          <Header/>
          <ChatFeed/>
          <MessageInput />
        </div>
      </Provider>
    );
  }
}

export default ChatBus;
