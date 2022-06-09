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
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AddPost } from './page/AddPostPage';


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
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
