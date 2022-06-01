import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { authReducer } from '../features/auth';
import { verifyReducer } from '../features/verify';
import { loginReducer } from '../features/login';
import { singUpSaga } from '../sagas/singUpSagas';
import { verifySaga } from '../sagas/verifySagas' ;
import { signInSagas } from '../sagas/signInSagas';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authReducer,
        verify: verifyReducer,
        login: loginReducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(singUpSaga)
sagaMiddleware.run(verifySaga)
sagaMiddleware.run(signInSagas)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch