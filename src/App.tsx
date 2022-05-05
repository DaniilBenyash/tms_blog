import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { PostList } from './components/PostList/PostList';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';


function App() {
  return (
    <div className="App">
        <Header firstName='Daniil' lastName='Benyash'/>
        <Login />
        <PostList />
        <Registration />
    </div>
  )
}

export default App;
