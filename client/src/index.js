import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer.js';
import App from './App';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

