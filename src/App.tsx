import React, { useEffect } from 'react';
import { PostList } from './page/PostList';
import { useAppDispatch } from "./redux/hooks";
import { fetchPosts } from "./features/posts/postsSlice";


function App() {
    return (
        <div className="App">
            <PostList></PostList>
        </div>
    );
}

export default App;