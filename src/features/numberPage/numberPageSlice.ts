import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type typePostsServer } from "../searchPosts/searchPostsSlice";

export type valuePageAction = {
    numberPage: number,
    sortValue: string,
}

type numberPageState = {
    posts: typePostsServer | null,
    valuePage: valuePageAction,
    isLoading: 'idle' | 'pending',
    error: any,
}

const initialState: numberPageState = {
    posts: null,
    valuePage: {
        sortValue: 'Date',
        numberPage: 1,
    },
    isLoading: 'idle',
    error: null,
}

export const numberPageSlice = createSlice({
    name: 'numberPage',
    initialState,
    reducers: {
        chengeNumberPage: (state, action: PayloadAction<valuePageAction>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
                state.valuePage = action.payload
            }
        },
        chengeNumberPageSuccess: (state, action: PayloadAction<typePostsServer>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.posts = action.payload
                state.error = null
            }
        },
        chengeNumberPageFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = 'idle'
            state.posts = null
            state.error = action.payload
        },
    }   
})

export const { chengeNumberPage, chengeNumberPageSuccess, chengeNumberPageFailure} = numberPageSlice.actions

export default numberPageSlice.reducer