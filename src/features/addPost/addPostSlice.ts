import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import newPasswordSlice from "../newPassword/newPasswordSlice";
import { type Post } from "../userInfo/userInfoSlice";

export type valueAddPost = {
    image?: string,
    text: string,
    lesson_num: string,
    title: string,
}

type actionAddPost = {
    valueAddPost: valueAddPost | null,
    valueMyPost: Post | null,
    isLoading: 'idle' | 'pending',
    error: any,
}

const initialState: actionAddPost = {
    valueAddPost: null,
    valueMyPost: null,
    isLoading: 'idle',
    error: null,
}

export const addPostSlice = createSlice({
    name: 'addPost',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<valueAddPost>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
                state.valueAddPost = action.payload
            }
        },
        getMyPostSuccess: (state, action: PayloadAction<Post>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.valueMyPost = action.payload
                state.error = null
            }
        },
        getMyPostFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        }
    }
})

export const { addPost, getMyPostSuccess, getMyPostFailure } = addPostSlice.actions

export default addPostSlice.reducer