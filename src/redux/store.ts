import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import tabReducer from '../features/tabb/tabSlice';
import { postsReducer } from '../features/posts';
import { fetchPostsSaga } from '../sagas/getDataSagas';
import { getPostSaga } from '../sagas/getPostSagas'
import themeReducer from '../features/theme/themeSlice'
import { filterPostsReducer } from '../features/filterPosts';
import { getFilterPostSaga } from '../sagas/getFilterPostSaga'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    posts: postsReducer,
    theme: themeReducer,
    filterPosts: filterPostsReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(sagaMiddleware)
  }
})

sagaMiddleware.run(fetchPostsSaga);
sagaMiddleware.run(getPostSaga);
sagaMiddleware.run(getFilterPostSaga);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch