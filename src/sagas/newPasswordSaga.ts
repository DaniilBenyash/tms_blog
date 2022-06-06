import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";
import { type actionNewPassword, newPasswordSuccess, newPasswordFailure } from "../features/newPassword/newPasswordSlice";

export function* newPassword(action: PayloadAction<actionNewPassword>) {
    try{
        const response: Response = yield fetch("https://studapi.teachmeskills.by/auth/users/reset_password_confirm/", {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'accept': 'application/json',
                "Content-Type": "application/json"
            }
        })
        .then(res => res.ok ? res : Promise.reject(res))
    
        const data: actionNewPassword = yield response.json() 
    
        yield put(newPasswordSuccess(data))
    } catch (error: any) {
        const dataError: actionNewPassword = yield error.json()
        
         yield put(newPasswordFailure(dataError))
    }
}

export function* newPasswordSaga() {
    yield(takeEvery('newPassword/newPassword', newPassword))
}