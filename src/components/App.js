import React, { Component } from 'react';
import Header from './header';
import MessageInput from "./MessageInput";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
        <MessageInput/>
      </div>
    );
  }
}

export default App;
