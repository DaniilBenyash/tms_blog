import { put, call, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { filterPostsSuccess, filterPostsFailure } from '../features/filterPosts/filterPostsSlice';
import { type filt } from '../features/filterPosts/filterPostsSlice';


export function* filterPosts(action: PayloadAction<string>){
    try {
        
        const response: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/?search=${action.payload}`)
        const data: filt = yield(response.json())
        yield put(filterPostsSuccess(data))
        
    } catch (error: any) {
        yield filterPostsFailure(error.message)
    }
}
export function* getFilterPostSaga() {
    yield takeEvery('filter/filterPosts', filterPosts)
}