import { PayloadAction } from "@reduxjs/toolkit";
import { call, takeEvery, put } from "redux-saga/effects";
import {
    verifingSuccess,
    verifingFailure,
    type TokenPayload
} from '../features/verify/verifySlice';

export function* verifing(action: PayloadAction<TokenPayload>) {
    try {
        const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/',{
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(res => res.ok ? res : Promise.reject(res))

        const data: TokenPayload = yield response.json()

        yield put(verifingSuccess(data))

    } catch(error: any) {

        const dataError: TokenPayload = yield error.json()
        
        yield put(verifingFailure(dataError))
    }
}

export function* verifySaga(){
    yield takeEvery('verify/verifing', verifing)
}