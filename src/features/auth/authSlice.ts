import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
    user: User | null,
    isLoading: string,
    error: string | null,
}

type User = {
    name: string,
    email: string,
    password: string
}

interface IPostsState {
    user: User | null
}

const initialState: AuthState = {
    user: null,
    isLoading: 'idle',
    error: null,
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        singUp: state => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        }, 
        singUpSuccess: (state, action: PayloadAction<User>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.user = action.payload
            }
        },
        singUpFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
    },
})

export const { singUp, singUpFailure, singUpSuccess } = authSlice.actions

export default authSlice.reducer

