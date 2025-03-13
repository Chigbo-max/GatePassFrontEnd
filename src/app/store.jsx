import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { gatePassApi } from '../services/GatePassApi'

export const store = configureStore({
    reducer: {
      [gatePassApi.reducerPath]: gatePassApi.reducer,
    },
  
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(gatePassApi.middleware),
  })
  
 
  setupListeners(store.dispatch)