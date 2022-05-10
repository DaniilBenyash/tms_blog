import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { PostList } from './components/PostList/PostList';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';

import { Button } from './components/Button/Button'
import Bookmark from './components/Button/icon/bookmark.svg'
import Like from './components/Button/icon/like.svg'
import Dislike from './components/Button/icon/dislike.svg'

function App() {

  return (
    <div className="App">
        <Header firstName='Daniil' lastName='Benyash'/>
        <Login />
        <PostList />
        <Registration />
        <Button text='Primary' onClick={() => console.log('Text')} className='button--primary' disabled={false}/>
        <Button text='Secondary' onClick={() => console.log('Text')} className='button--secondary' disabled={false}/>
        <Button text='Secondary 2' onClick={() => console.log('Text')} className='button--secondary2' disabled={false}/>
        <Button text='Button with icon' onClick={() => console.log('Text')} className='button--with_icon' disabled={false} icon={Bookmark}/>
        <Button onClick={() => console.log('Text')} className='button--like' disabled={false} icon={Like}/>
        <Button onClick={() => console.log('Text')} className='button--dislike' disabled={false} icon={Dislike}/>
    </div>
  )
}

export default App;