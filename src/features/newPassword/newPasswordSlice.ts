import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type actionNewPassword = {
    uid: string | [],
    token: string | [],
    new_password: string | [],
}

type NewPasswordState = {
    confirmData: actionNewPassword | null,
    isLoading: 'idle' | 'pending',
    error: actionNewPassword | null,
}

const initialState: NewPasswordState = {
    confirmData: null,
    isLoading: 'idle',
    error: null,
}

export const newPasswordSlice = createSlice({
    name: 'newPassword',
    initialState,
    reducers: {
        newPassword: (state, action: PayloadAction<actionNewPassword>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        newPasswordSuccess: (state, action: PayloadAction<actionNewPassword>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.confirmData = action.payload
                state.error = null
            }
        },
        newPasswordFailure: (state, action: PayloadAction<actionNewPassword>) => {
            state.isLoading = 'idle'
            state.error = action.payload
            state.confirmData = null
        }
    }
})


export const { newPassword, newPasswordSuccess, newPasswordFailure } = newPasswordSlice.actions

export default newPasswordSlice.reducer