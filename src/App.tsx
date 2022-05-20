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
                <span>{post.like}</span>
                <button onClick={() => onLikePost(post.id)}>Like</button>
                <button onClick={() => onDislikePost(post.id)}>Dislike</button>
            </div>
          )
          })}
        <Button text='Primary' onClick={toggleTheme} className='button--primary' disabled={false}/>
        <Button text='Secondary' onClick={() => console.log('Text')} className='button--secondary' disabled={false}/>
        <Button text='Secondary 2' onClick={() => console.log('Text')} className='button--secondary2' disabled={false}/>
        <Button text='Button with icon' onClick={() => console.log('Text')} className='button--with_icon' disabled={false} icon={<Bookmark />}/>
        <Button onClick={() => console.log('Text')} className='button--like' disabled={false} icon={<Like />}/>
        <Button onClick={() => console.log('Text')} className='button--dislike' disabled={false} icon={<Dislike />}/>
    </div>
  );
}

export default App;