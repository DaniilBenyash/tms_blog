import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTab } from "./tabSlice";

export const useTab = () => {
    const tab = useAppSelector(state => state.tab.value);
    const dispatch = useAppDispatch();

    const toggleTab = (newTab: string) => dispatch(setTab(newTab))
    
    return {
        tab,
        toggleTab,
    }
}