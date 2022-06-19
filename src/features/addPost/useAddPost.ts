import { useAppDispatch } from "../../redux/hooks";
import { type valueAddPost, addPost } from "./addPostSlice";

export const useAddPost = () => {
    const dispatch = useAppDispatch();

    const setNewPost = (post: valueAddPost) => {
        dispatch(addPost(post))
    }

    return {
        setNewPost
    }
}