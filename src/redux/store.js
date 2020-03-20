import { createStore, applyMiddleware, compose } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'

import reducer from './reducers/index'

const persistConfig = {
  key: 'root',  
  storage: AsyncStorage  
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
  let store = createStore(
    persistedReducer,     
    compose(applyMiddleware(createLogger()), applyMiddleware(thunk))    
  )

  let persistor = persistStore(store)
  return { store, persistor }
}
