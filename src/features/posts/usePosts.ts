import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts, likePost, dislikePost, favoritePost } from "./postsSlice";
import { postsData } from "../../redux/postsData";
import { useEffect } from "react";

export const usePosts = () => {
    const posts = useAppSelector( state => state.posts.content)
    
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if(!posts){
            dispatch(fetchPosts(postsData))
        }
    }, [])
    
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