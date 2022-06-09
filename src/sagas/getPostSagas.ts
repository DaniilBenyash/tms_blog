import { put, call, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchOnePostSuccess, fetchOnePostFailure, IPost } from '../features/getPosts/postsSlice'

export function* fetchOnePost(action: PayloadAction<number>){
    try {
        const response: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/${action.payload}`)
        
        const data: IPost = yield(response.json())

        yield put(fetchOnePostSuccess(data))
        
    } catch (error: any) {
        yield fetchOnePostFailure(error.message)
    }
}
export function* getPostSaga() {
    yield takeEvery('posts/fetchOnePost', fetchOnePost)
}
