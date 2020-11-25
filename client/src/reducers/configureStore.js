import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';
import ReduxThunk  from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [],
    blacklist: [],
    debug: true
}

// function saveToLocalStorage(state) {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem("state", serializedState)
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

// function loadFromLocalStorage() {
//     try {
//         const serializedState = localStorage.getItem("state");
//         if (serializedState === null) {
//             return undefined
//         }
//         return JSON.parse(serializedState)
//     }
//     catch (e) {
//         console(e);
//         return;
//     }
// }

// const rootRedu = combineReducers({
//     list :listReducer
// })

// const presistedState = loadFromLocalStorage();

// const store = createStore(rootReducer, presistedState)

// store.subscribe(() => saveToLocalStorage(store.getState()) )

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk , logger)) //,middleware

const persistor = persistStore(store);

export { store, persistor }

