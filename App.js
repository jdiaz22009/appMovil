import React from 'react'
import 'react-native-gesture-handler'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import configureStore from './src/redux/store'

import Navigator from './src/routes'

const { persistor, store } = configureStore()

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App
