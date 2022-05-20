import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts, likePost, dislikePost } from "./postsSlice";
import { postsData } from "../../redux/postsData";
import { useEffect } from "react";

export const usePosts = () => {
    const posts = useAppSelector( state => state.posts.content)
    
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchPosts(postsData))
    }, [])
    
    const onLikePost = (id: number) => {
        dispatch(likePost(id))
    }
    const onDislikePost = (id: number) => {
        dispatch(dislikePost(id))
    }
    
    return {
        posts,
        onLikePost,
        onDislikePost,
    }
}
