import React from 'react';
import { Button } from './components/Button/Button'
import { ReactComponent as Bookmark } from './components/Button/icon/like.svg'
import { ReactComponent as Like } from './components/Button/icon/like.svg'
import { ReactComponent as Dislike } from './components/Button/icon/dislike.svg'
import { PostList } from './page/PostList';
import { Post } from './page/Post/Post'

function App() {

  return (
    <div className="App">
        <PostList />
    </div>
  );
}

export default App;