import { put, call, takeEvery } from 'redux-saga/effects'
import { fetchPostsFailure, fetchPostsSuccess } from '../features/posts/postsSlice'
import { postsData } from "../redux/postsData";

const delay = (ms: number) => new Promise(res => {
    setTimeout(res, ms)
})

export function* fetchPosts() {
    try {
        yield call(delay, 100)
        yield put(fetchPostsSuccess(postsData))
    }
    catch(error: any){
        yield put(fetchPostsFailure(error.message))
    }
}

export function*fetchPostsSaga(){
    yield takeEvery('posts/fetchPosts', fetchPosts)
}