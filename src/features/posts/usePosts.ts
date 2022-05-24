import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts, likePost, dislikePost, favoritePost } from "./postsSlice";

export const usePosts = () => {
    const posts = useAppSelector( state => state.posts.content)
    
    const dispatch = useAppDispatch()
    
    if(!posts){
        dispatch(fetchPosts())
    }

    const onLikePost = (id: number) => {
        dispatch(likePost(id))
    }

    const onDislikePost = (id: number) => {
        dispatch(dislikePost(id))
    }

    const onFavoritePost = (id: number) => {
        dispatch(favoritePost(id))
    }
    
    return {
        posts,
        onLikePost,
        onDislikePost,
        onFavoritePost,
    }
}