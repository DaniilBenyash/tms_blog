import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { authReducer } from '../features/auth';
import { verifyReducer } from '../features/verify';
import { loginReducer } from '../features/login';
import { userInfoReducer } from '../features/userInfo';
import { singUpSaga } from '../sagas/singUpSagas';
import { verifySaga } from '../sagas/verifySagas' ;
import { signInSaga } from '../sagas/signInSagas';
import { UserInfoSaga } from '../sagas/userInfoSagas';
import { MyPostsSaga } from '../sagas/myPostsSagas';
import themeReducer from '../features/theme/themeSlice'
import { resetPasswordReducer } from '../features/resetPassword';
import { resetPasswordSaga } from '../sagas/resetPasswordSaga';
import { newPasswordReducer } from '../features/newPassword';
import { newPasswordSaga } from '../sagas/newPasswordSaga';
import { addPostReducer } from '../features/addPost';
import { addPostSaga } from '../sagas/addPostSaga';
import tabReducer from '../features/tabb/tabSlice';
import { postsReducer } from '../features/getPosts';
import { numberPageReducer } from '../features/numberPage'
import { fetchPostsSaga } from '../sagas/getDataSagas';
import { getPostSaga } from '../sagas/getPostSagas'
import { searchPostsReducer } from '../features/searchPosts';
import { getSearchPostSaga } from '../sagas/searchPostSaga';
import { getPostFromPageSaga } from '../sagas/numberPageSaga';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authReducer,
        verify: verifyReducer,
        login: loginReducer,
        userInfo: userInfoReducer,
        theme: themeReducer,
        resetPassword: resetPasswordReducer,
        newPassword: newPasswordReducer,
        addPost: addPostReducer,
        tab: tabReducer,
        posts: postsReducer,
        searchPosts: searchPostsReducer,
        numberPage: numberPageReducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(singUpSaga)
sagaMiddleware.run(verifySaga)
sagaMiddleware.run(signInSaga)
sagaMiddleware.run(UserInfoSaga)
sagaMiddleware.run(MyPostsSaga)
sagaMiddleware.run(resetPasswordSaga)
sagaMiddleware.run(newPasswordSaga)
sagaMiddleware.run(addPostSaga)
sagaMiddleware.run(fetchPostsSaga);
sagaMiddleware.run(getPostSaga);
sagaMiddleware.run(getSearchPostSaga);
sagaMiddleware.run(getPostFromPageSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch