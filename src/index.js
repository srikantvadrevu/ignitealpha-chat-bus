import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import ChatBus from './components/ChatBus';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChatBus />, document.getElementById('root'));
registerServiceWorker();
