import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type User = {
    name: string,
    email: string,
    password: string
}

interface IPostsState {
    user: User | null
}

const initialState: IPostsState = {
    user: null,
    // user:{
    //     name: '',
    //     email: ''.
    //     password: '',
    // }
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        singUp: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }, 
    },
})

export const { singUp } = authSlice.actions

export default authSlice.reducer

