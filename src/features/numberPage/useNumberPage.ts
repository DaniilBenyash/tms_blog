import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { chengeNumberPage } from "./numberPageSlice";
import { type valuePageAction } from "./numberPageSlice";
export const useNumberPage = () => {

    const posts = useAppSelector(state => state.numberPage.posts)
    const valuePage = useAppSelector(state => state.numberPage.valuePage)
    
    const dispatch = useAppDispatch();

    const chengePage = (numberPage: number) => {
        dispatch(chengeNumberPage({numberPage:numberPage, sortValue: valuePage.sortValue}))
    }
    const sortPost = (sortValue: string) => {
        dispatch(chengeNumberPage({numberPage: valuePage.numberPage, sortValue: sortValue}))
    }

    return {
        posts,
        valuePage,
        chengePage,
        sortPost,
    }
}