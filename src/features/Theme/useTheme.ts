import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTheme } from "./ThemeSlice";

export const useTheme = () => {
    const theme = useAppSelector(state => state.theme.value)
    const dispatch = useAppDispatch()

    const toggleTheme = (newTheme: boolean) => dispatch(setTheme(newTheme))

    return {
        theme,
        toggleTheme,
    }
}