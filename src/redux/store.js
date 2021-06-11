import { createStore, combineReducers, applyMiddleware } from 'redux'
import dataReducer from './dataReducer'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from './saga/index'

const sagaMiddleware = createSagaMiddleware()

let rootReducer = combineReducers({
  dataReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootWatcher)

export default store