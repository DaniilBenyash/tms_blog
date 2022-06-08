import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { filterPosts } from "./filterPostsSlice";
import { IPost } from "../posts/postsSlice";

export const useFilterPosts = () => {

    const filPosts = useAppSelector(state => state.filterPosts.posts)

    const dispatch = useAppDispatch();

    const setValueFilter = (value: string) => {
        dispatch(filterPosts(value))
    }

    return {
        filPosts,
        setValueFilter,
    }
}