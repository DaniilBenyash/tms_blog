import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IThemeState {
    value: boolean,
}

const initialState: IThemeState = {
    value: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        },
    },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer