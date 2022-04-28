import React from "react";
import './Login.css';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';


export const Login = () => {
    return (
        <div className="login">
            <Header firstName='Daniil' lastName='Benyash'/>
            <a href="" className="login__button-back">Back to home</a>
            <h1 className="login__name">Sign In</h1>

            <section className="sign-in">
                <div className="sign-in__window">

                    <Input label='Email' placeholder='Your email' disabled={false}/>
                    <div className="sign-in--pading_20"></div>

                    <Input label='Password' placeholder='Your password' disabled={false}/>
                    <div className="sign-in--pading_16"></div>

                    <a href="" className="sign-in__button-forgot">Forgot password?</a>
                    <p className="sign-in__text">Don't have an account? <a href="" className="sign-in_button-sign-up">Sign Up</a></p>
                </div>
            </section>
            <footer className="login__footer">
                <p>2022 Blogofolio</p>
                <p>All rights reserved</p>
            </footer>
        </div>
    )
}