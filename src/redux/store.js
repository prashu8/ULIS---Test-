import { createStore, applyMiddleware, compose } from "redux";


import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import rootReducers from "./rootReducers";

const productConfig= {
    key: 'root',
    storage: AsyncStorage
}


const persistedReducer = persistReducer(productConfig, rootReducers)



export const store = createStore(persistedReducer,compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
 ))


 export const persistor = persistStore(store);