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
    name: 'auth',
    initialState,
    reducers: {
        signUp: state => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        }, 
        signUpSuccess: (state, action: PayloadAction<User>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.user = action.payload
            }
        },
        signUpFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
    },
})

export const { signUp, signUpFailure, signUpSuccess } = authSlice.actions

export default authSlice.reducer