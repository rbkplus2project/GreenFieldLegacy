import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer.js';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { store, persistor } from './createStore'
console.log(store, persistor)
// const store2 = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><PersistGate loading={null} persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('root'));
