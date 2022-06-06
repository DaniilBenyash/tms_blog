import { PayloadAction } from "@reduxjs/toolkit";
import { put, call, takeEvery} from 'redux-saga/effects';
import {
    getMyPosts,
    myPostsFailure,
    type Post,
} from '../features/userInfo/userInfoSlice';
import { type loginToken } from "../features/login/loginSlice";
import { customFetch } from "../utils/customFetch";

export function* MyPosts() {
    try {
        const url = "https://studapi.teachmeskills.by/blog/posts/my_posts/";
        const responseMyPosts = customFetch(url)

        yield responseMyPosts.then(res => res?.ok ? res : Promise.reject(res))

        const MyPosts: Array<Post> = yield (responseMyPosts.then(data => data?.json()) as unknown as Array<Post>)
        
        yield put(getMyPosts(MyPosts))

    } catch(error:any) {
        yield put(myPostsFailure(error.statusText))
    }
}
export function* MyPostsSaga() {
    yield takeEvery('login/signInSuccess', MyPosts)
}