import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {chatBusReducers} from "../reducers/reducers";
import ChatBusContainer from "./ChatBusContainer";

const reducers = combineReducers({chatBusState: chatBusReducers});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * Component rendering ChatBus Application.
 */
class ChatBus extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ChatBusContainer/>
      </Provider>
    )
  }
}

export default ChatBus;
