import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import tabReducer from '../features/tabb/tabSlice';
import { postsReducer } from '../features/getPosts';
import { numberPageReducer } from '../features/numberPage'
import { fetchPostsSaga } from '../sagas/getDataSagas';
import { getPostSaga } from '../sagas/getPostSagas'
import themeReducer from '../features/theme/themeSlice'
import { searchPostsReducer } from '../features/searchPosts';
import { getSearchPostSaga } from '../sagas/searchPostSaga';
import { getPostFromPageSaga } from '../sagas/numberPageSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    posts: postsReducer,
    theme: themeReducer,
    searchPosts: searchPostsReducer,
    numberPage: numberPageReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(sagaMiddleware)
  }
})

sagaMiddleware.run(fetchPostsSaga);
sagaMiddleware.run(getPostSaga);
sagaMiddleware.run(getSearchPostSaga);
sagaMiddleware.run(getPostFromPageSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch