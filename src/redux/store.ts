import { configureStore } from '@reduxjs/toolkit'
import tabReducer from '../features/Tab/tabSlice'
import { postsReducer } from '../features/posts'

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    posts: postsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch