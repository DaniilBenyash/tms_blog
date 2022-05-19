import { configureStore } from '@reduxjs/toolkit'
import darkThemeReducer from './reducers/darkTheme'

export const store = configureStore({
    reducer: {
        darkTheme: darkThemeReducer,
    },
})
 
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch