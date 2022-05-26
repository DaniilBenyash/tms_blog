import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Post = {
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
    content: Array<Post> | null,
    post: Post | null,
    isLoading: 'idle' | 'pending',
    error: string | null,
}

const initialState: IPostsState = {
    content: null,
    isLoading: 'idle',
    error: null,
    post: null,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        fetchPostsSuccess:(state, action:PayloadAction<Array<Post>>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.content = action.payload
            }
        },
        fetchPostsFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
        getPost: (state, action:PayloadAction<number>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        getPostSuccess:(state, action:PayloadAction<Post>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.post = action.payload
            }
        },
        getPostFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
        likePost: (state, action: PayloadAction<number>) => {
            if(state.content) {
                state.content = state.content.map(post => post.id === action.payload ? {...post, like: !post.like ? true : undefined} : post)
            }
        },
        dislikePost: (state, action: PayloadAction<number>) => {
            if(state.content) {
                state.content = state.content.map(post => post.id === action.payload ? {...post, like: post.like || post.like === undefined ? false : undefined} : post)
            }
        },
        favoritePost: (state, action: PayloadAction<number>) => {
            if(state.content) {
                state.content = state.content.map(post => post.id === action.payload ? {...post, favorite: !post.favorite} : post)
            }
        },
    },
})

export const { 
    fetchPosts, 
    fetchPostsSuccess, 
    fetchPostsFailure, 
    getPost, 
    getPostSuccess, 
    getPostFailure,
    likePost, 
    dislikePost, 
    favoritePost } = postsSlice.actions

export default postsSlice.reducer