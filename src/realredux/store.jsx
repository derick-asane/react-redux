
import { legacy_createStore , applyMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

import thunkMiddleware from 'redux-thunk'


 const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

 export default store