import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchOnePost, fetchPosts, likePost, dislikePost, favoritePost } from "./postsSlice";

export const usePosts = () => {
    const posts = useAppSelector( state => state.posts.content)
    
    const onePost = useAppSelector( state => state.posts.post)

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if(!posts) {
            dispatch(fetchPosts())
        }
    }, [])

    const getOnePost = (id: number) => {
        dispatch(fetchOnePost(id))
    } 

    const getInfoOnePost = (id: number) => {
        return posts?.[id]
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
        getOnePost,
        posts,
        getInfoOnePost,
        onePost,
        onLikePost,
        onDislikePost,
        onFavoritePost,
    }
}