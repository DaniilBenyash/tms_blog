import { PayloadAction } from "@reduxjs/toolkit";
import { put, call, takeEvery} from 'redux-saga/effects';
import {
    getUserInfo,
    userInfoFailure,
    type UserInfo,
} from '../features/userInfo/userInfoSlice';
import { type loginToken } from "../features/login/loginSlice";

export function* UserInformation(action: PayloadAction<loginToken>) {
    try {
        const responseInfoUser: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/me/',{
            method: 'GET',
            headers: {"Authorization": `Bearer ${action.payload.access}`},
        })

        const userInfo: UserInfo = yield responseInfoUser.json()
        
        yield put(getUserInfo(userInfo))

    } catch(error:any) {        
        yield put(userInfoFailure(error))
    }
}
export function* UserInfoSaga() {
    yield takeEvery('login/signInSuccess', UserInformation)
}