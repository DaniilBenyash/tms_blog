import { put, call, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { searchPostsSuccess, searchPostsFailure } from '../features/searchPosts/searchPostsSlice';
import { type typePostsServer } from '../features/searchPosts/searchPostsSlice';


export function* searchPosts(action: PayloadAction<string>){
    try {
        
        const response: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=1000&offset=0&search=${action.payload}`)
        const data: typePostsServer = yield(response.json())
        yield put(searchPostsSuccess(data))
        
    } catch (error: any) {
        yield searchPostsFailure(error.message)
    }
}
export function* getSearchPostSaga() {
    yield takeEvery('search/searchPosts', searchPosts)
}