import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Post = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number
  }

export type UserInfo = {
    email: string,
    id: number,
    username: string,
}

type UserInfoPayload = {
    user: UserInfo | null,
    myPosts: Array<Post> | null,
    error: any,
}

const initialState: UserInfoPayload = {
    user: null,
    myPosts: null,
    error: null,
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        getUserInfo: (state, action: PayloadAction<UserInfo>) => {
            state.user = action.payload
        },
        getMyPosts: (state, action: PayloadAction<Array<Post>>) => {
            state.myPosts = action.payload
        },
        userInfoFailure: (state, action: PayloadAction<any>) => {
            state.error = action.payload
        },
        myPostsFailure:(state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})

export const { getUserInfo, getMyPosts, userInfoFailure, myPostsFailure } = userInfoSlice.actions

export default userInfoSlice.reducer