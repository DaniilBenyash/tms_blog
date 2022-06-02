import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import tabReducer from '../features/tab/tabSlice';
import { postsReducer } from '../features/posts';
import { fetchPostsSaga } from '../sagas/getDataSagas';
import { getPostSaga } from '../sagas/getPostSagas'
import themeReducer from '../features/theme/themeSlice'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    posts: postsReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(sagaMiddleware)
  }
})

sagaMiddleware.run(fetchPostsSaga);
sagaMiddleware.run(getPostSaga);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch