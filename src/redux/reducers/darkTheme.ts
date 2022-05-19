import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkThemeState {
    value: boolean,
}

const initialState: DarkThemeState = {
    value: false,
}

export const darkThemeSlice = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
        setDarkTheme: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        },
    },
})

export const { setDarkTheme } = darkThemeSlice.actions

export default darkThemeSlice.reducer