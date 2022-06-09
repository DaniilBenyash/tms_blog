import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Post } from './page/PostPage/Post';
import { PostList } from './page/PostList/PostList';
import { SearchPage } from './page/SearchPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route 
                        path='/' 
                        element={<PostList/>}
                    />
                    <Route 
                        path='/post/:id' 
                        element={<Post />}
                    />
                    <Route 
                        path='/search'
                        element={<SearchPage/>}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
