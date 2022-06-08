import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IPost } from "../posts/postsSlice";

export type filt = {
    count: number,
    next: string,
    previous: boolean
    results: IPost[]
}

type filterPostsState = {
    posts: filt | null,
    isLoading: 'idle' | 'pending',
    error: null | any
}

const initialState: filterPostsState = {
    posts: null,
    isLoading: 'idle',
    error: null,
}

export const filterPostsSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterPosts: (state, action: PayloadAction<string>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        filterPostsSuccess: (state, action: PayloadAction<filt>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.posts = action.payload
                state.error = null
            }
        },
        filterPostsFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        }
    }
})

export const {filterPosts, filterPostsSuccess, filterPostsFailure} = filterPostsSlice.actions

export default filterPostsSlice.reducer