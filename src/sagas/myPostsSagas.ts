import { PayloadAction } from "@reduxjs/toolkit";
import { put, call, takeEvery} from 'redux-saga/effects';
import {
    getMyPosts,
    myPostsFailure,
    type Post,
} from '../features/userInfo/userInfoSlice';
import { type loginToken } from "../features/login/loginSlice";

export function* MyPosts(action: PayloadAction<loginToken>) {
    try {
        const responseMyPosts: Response = yield fetch("https://studapi.teachmeskills.by/blog/posts/my_posts/",{
                method: 'GET',
                headers: {"Authorization": `Bearer ${action.payload.access}`},
        })
        
        const MyPosts: Array<Post> = yield responseMyPosts.json()
        console.log(MyPosts);
        
        yield put(getMyPosts(MyPosts))

    } catch(error:any) {
        yield put(myPostsFailure(error.message))
    }
}
export function* MyPostsSaga() {
    yield takeEvery('login/signInSuccess', MyPosts)
}