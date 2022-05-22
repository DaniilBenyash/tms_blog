import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITabState {
    value: string
}

const initialState: ITabState = {
    value: 'all',
}

export const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {
        setTab: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { setTab } = tabSlice.actions

export default tabSlice.reducer