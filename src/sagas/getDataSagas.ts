import { put, call, takeEvery } from 'redux-saga/effects'
import { fetchPostsFailure, fetchPostsSuccess, IPost } from '../features/posts/postsSlice'

type dataPost = {
    count: number, 
    next: null, 
    previous: null, 
    results: Array<IPost>
}

export function* fetchPosts() {
    try {
        const response: Response = yield call(() => new Promise(res => {
            res(fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=70&offset=0`)) 
        }))
        const dataPost: dataPost = yield(response.json())
        yield put(fetchPostsSuccess(dataPost.results))
    }
    catch(error: any){
        yield put(fetchPostsFailure(error.message))
    }
}

export function*fetchPostsSaga(){
    yield takeEvery('posts/fetchPosts', fetchPosts)
}