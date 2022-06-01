import { createSlice, type PayloadAction} from '@reduxjs/toolkit';

export type TokenPayload = {
    uid: string | [string],
    token: string | [string],
}

type VerifyState = {
    token: TokenPayload | null,
    isLoading: 'idle' | 'pending',
    error: TokenPayload | null,
}

const initialState: VerifyState = {
    token: null,
    isLoading: 'idle',
    error: null,
}

export const verifySlice = createSlice({
    name: 'verify',
    initialState,
    reducers: {
        verifing: ( state, action: PayloadAction<TokenPayload>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        verifingSuccess: (state, action: PayloadAction<TokenPayload>) => {  
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.token = action.payload
                state.error = null
            }
        },
        verifingFailure: (state, action: PayloadAction<TokenPayload>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
    }
})

export const {verifing, verifingSuccess, verifingFailure} = verifySlice.actions

export default verifySlice.reducer