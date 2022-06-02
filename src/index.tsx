import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Post } from './page/Post';
import { PostList } from './page/PostList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path='/' 
                        element={<App/>}
                    />
                    <Route 
                        path='/post/:id' 
                        element={<Post />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
