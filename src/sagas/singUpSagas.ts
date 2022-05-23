import { put, call, takeEvery } from 'redux-saga/effects'
import {
    signUpFailure,
    signUpSuccess,
} from '../features/auth/authSlice'

const delay = (ms: number) => new Promise( res => {
    setTimeout(res, ms)
})

export function* signUp() {
    try {
        yield call(delay, 2000)
        const data = {
            name: 'Daniil',
            email: '1234@gmail.com',
            password: '12345678'
        }
        yield put(signUpSuccess(data))
    }
    catch(error: any) {
        yield put(signUpFailure(error.message))
    }
}

export function* singUpSaga(){
    yield takeEvery('auth/signUp', signUp)
}