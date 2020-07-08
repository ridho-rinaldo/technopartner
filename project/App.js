/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStore } from 'redux'
import reducer from './src/reducers'
import { Provider } from 'react-redux'

import Root from './src/Root'

const store = createStore(reducer)

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
};

export default App;
