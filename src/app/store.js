// https://redux.js.org/tutorials/quick-start

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
export default configureStore({
  reducer: {
    app: rootReducer,
  },
})
