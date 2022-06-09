import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../getPosts/postsSlice";

export type typePostsServer = {
    count: number,
    next: string,
    previous: boolean
    results: IPost[]
}

type searchPostsState = {
    posts: typePostsServer | null,
    valueSearch: string | null,
    isLoading: 'idle' | 'pending',
    error: null | any
}

const initialState: searchPostsState = {
    posts: null,
    valueSearch: null,
    isLoading: 'idle',
    error: null,
}

export const searchPostsSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchPosts: (state, action: PayloadAction<string | null>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
                state.valueSearch = action.payload
            }
        },
        searchPostsSuccess: (state, action: PayloadAction<typePostsServer>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.posts = action.payload
                state.error = null
            }
        },
        searchPostsFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        }
    }
})

export const {searchPosts, searchPostsSuccess, searchPostsFailure} = searchPostsSlice.actions

export default searchPostsSlice.reducer