import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Post = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
    like?: boolean,
    favorite?: boolean,
}

interface IPostsState {
    content: Array<Post> | null
}

const initialState: IPostsState = {
    content: null,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action: PayloadAction<Array<Post>>) => {
            state.content = action.payload
        }, 
        likePost: (state, action: PayloadAction<number>) => {
            if(state.content) {
                state.content = state.content.map(post => post.id === action.payload ? {...post, like: true} : post)
            }
        },
        dislikePost: (state, action: PayloadAction<number>) => {
            if(state.content) {
                state.content = state.content.map(post => post.id === action.payload ? {...post, like: false} : post)
            }
        },
        favoritePost: (state, action: PayloadAction<number>) => {
            if(state.content) {
                state.content = state.content.map(post => post.id === action.payload ? {...post, favorite: !post.favorite} : post)
            }
        },
    },
})

export const { fetchPosts, likePost, dislikePost, favoritePost } = postsSlice.actions

export default postsSlice.reducer