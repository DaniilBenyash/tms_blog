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
import themeReducer from '../features/Theme/ThemeSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authReducer,
        verify: verifyReducer,
        login: loginReducer,
        userInfo: userInfoReducer,
        theme: themeReducer,
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

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch