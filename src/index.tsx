import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { SignIn } from './page/SignIn';
import { SignUp } from './page/SignUp';
import { Verify } from './page/Verify';
import { ResetPassword } from './page/ResetPassword';
import { NewPassword } from './page/NewPassword';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header/>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
      <Footer/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
