import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import newPasswordSlice from "../newPassword/newPasswordSlice";

export type valueAddPost = {
    image?: string,
    text: string,
    lesson_num: string,
    title: string,
}

export type valueMyPost = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
}
type actionAddPost = {
    valueAddPost: valueAddPost | null,
    valueMyPost: valueMyPost | null,
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
        getMyPostSuccess: (state, action: PayloadAction<valueMyPost>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.valueMyPost = action.payload
                state.error = null
            }
        },
        getMyPostFailue: (state, action: PayloadAction<any>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        }
    }
})

export const { addPost, getMyPostSuccess, getMyPostFailue } = addPostSlice.actions

export default addPostSlice.reducer