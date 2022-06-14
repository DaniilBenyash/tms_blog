import { PayloadAction } from "@reduxjs/toolkit";
import { put, call, takeEvery, take} from 'redux-saga/effects';
import {
    getMyPostSuccess,
    getMyPostFailure,
    type valueAddPost,
} from '../features/addPost/addPostSlice';
import { type Post } from "../features/userInfo/userInfoSlice";
import { customFetch } from "../utils/customFetch";

export function* addPost(action: PayloadAction<valueAddPost>) {
    try{
        const url = "https://studapi.teachmeskills.by/blog/posts";

        const formData = new FormData()

        formData.append('image', `${action.payload.image}`)
        formData.append('text', `${action.payload.text}`)
        formData.append('lesson_num', `${action.payload.lesson_num}`)
        formData.append('title', `${action.payload.title}`)

        const config = {
            method: 'POST',
            body: formData,
        }

        const responseAddPost = customFetch(url, config)

        yield responseAddPost.then(res => res?.ok ? res : Promise.reject(res))
        
        const myPost: Post =  yield (responseAddPost.then(data => data?.json()) as unknown as Array<Post>)

        console.log(myPost);

        yield put(getMyPostSuccess(myPost))

    } catch(error: any) {

        console.log(error);
        
        yield put(getMyPostFailure(error))
    }
}
export function* addPostSaga() {
    yield takeEvery('addPost/addPost', addPost)
}