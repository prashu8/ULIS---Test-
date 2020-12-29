/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import AppNav from './src/navigations/AppNavigator';

import { store } from './src/redux/store';


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppNav/>
    </Provider>
  );
};



export default App;
