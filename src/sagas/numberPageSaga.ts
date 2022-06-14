import { put, call, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { chengeNumberPageSuccess, chengeNumberPageFailure } from '../features/numberPage/numberPageSlice';
import { type typePostsServer } from '../features/searchPosts/searchPostsSlice';
import { type valuePageAction } from '../features/numberPage/numberPageSlice';
import { act } from 'react-dom/test-utils';

export function* getPostsFromPage(action: PayloadAction<valuePageAction>){

    const numberPage = action.payload.numberPage
    const sortValue = action.payload.sortValue
    
    let limit = (numberPage: number) => {
        if(numberPage === 1) return 11
        return 12
    }

    let offset = (numberPage: number) => {
        if(numberPage === 1) return 0
        return (11 * (numberPage - 1)) + (numberPage - 2)
    }
    
    const url = `https://studapi.teachmeskills.by/blog/posts/?limit=${limit(numberPage)}&offset=${offset(numberPage)}&ordering=${sortValue}`
    
    try{
        
        const response: Response = yield fetch(url)

        .then(res => res.ok ? res : Promise.reject(res))

        const data: typePostsServer = yield(response.json())
        
        yield put(chengeNumberPageSuccess(data))
    } catch (error: any) {
        yield chengeNumberPageFailure(error)
    }
}
export function* getPostFromPageSaga() {
    yield takeEvery('numberPage/chengeNumberPage', getPostsFromPage)
}