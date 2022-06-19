import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { SignIn } from './page/SignInPage';
import { SignUp } from './page/SignUpPage';
import { Verify } from './page/VerifyPage';
import { ResetPassword } from './page/ResetPasswordPage';
import { NewPassword } from './page/NewPasswordPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AddPost } from './page/AddPostPage';
import { Post } from './page/PostPage/Post';
import { PostList } from './page/PostList/PostList';
import { SearchPage } from './page/SearchPage';


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
              element={<App/>}  
            />
            <Route
              path='/sign-up'
              element={<SignUp/>}
            />
            <Route
              path='/sign-in'
              element={<SignIn/>}
            />
            <Route
              path='/verify'
              element={<Verify/>}
            />
            <Route 
              path='/reset-password'
              element={<ResetPassword/>}
            />
            <Route 
              path='/new-password'
              element={<NewPassword/>}
            />
            <Route 
              path='/add-post'
              element={<AddPost/>}
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
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
