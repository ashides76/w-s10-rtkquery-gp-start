import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todosSlice'
import { todosApi } from './todosApi'

export const store = configureStore({
  reducer: {
    todosState: todosReducer,
    [todosApi.reducerPath]: todosApi.reducer, //is this destrcturing, help me with this. 
  },
  middleware: getDefault => getDefault().concat(
    todosApi.middleware,
  )
})
