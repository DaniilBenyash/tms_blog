import React, { useEffect, useState } from 'react';
import { Button } from './components/Button/Button'
import { ReactComponent as Bookmark } from './components/Button/icon/like.svg'
import { ReactComponent as Like } from './components/Button/icon/like.svg'
import { ReactComponent as Dislike } from './components/Button/icon/dislike.svg'
import { useTheme } from './features/theme/useTheme'
import { usePosts } from './features/posts/usePosts'

function App() {

  const { theme, toggleTheme } = useTheme();

  const { posts, onLikePost, onDislikePost } = usePosts()

  return (
    <div className={`App theme--${theme}`}>
        {posts?.map(post => {
          return (
            <div key={post.id}>
                <p>{post.text}</p>
                <span>{String(post.like)}</span>
                <button onClick={() => onLikePost(post.id)}>Like</button>
                <button onClick={() => onDislikePost(post.id)}>Dislike</button>
            </div>
          )
          })}
    </div>
  );
}

export default App;