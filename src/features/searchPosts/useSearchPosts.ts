import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { searchPosts } from "./searchPostsSlice";

export const useSearchPosts = () => {

    const filPosts = useAppSelector(state => state.searchPosts.posts)

    const dispatch = useAppDispatch();

    const setValueSearch = (value: string | null) => {
        dispatch(searchPosts(value))
    }

    return {
        filPosts,
        setValueSearch,
    }
}