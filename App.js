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
import { LogBox } from 'react-native';
import { store } from './src/redux/store';


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};



export default App;



// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();