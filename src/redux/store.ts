import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import tabReducer from '../features/Tab/tabSlice';
import { postsReducer } from '../features/posts';
import { fetchPostsSaga } from '../sagas/getDataSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    posts: postsReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(sagaMiddleware)
  }
})

sagaMiddleware.run(fetchPostsSaga)
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch