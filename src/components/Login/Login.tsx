import React, { useState } from "react";
import './Login.css';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';


export const Login = () => {
    
    const [valueEmail, setValueEmail] = useState()
    const [errorEmail, setErrorEmail] = useState('')

    const changeInputEmail = (event: any): void => {

        setValueEmail(event.target.value)

        if(event.target.value.length > 5){
            setErrorEmail('error')
            }else{
                setErrorEmail('')
            }
    }
    const [valuePassword, setValuePassword] = useState()
    const [errorPassword, setErrorPassword] = useState('')

    const changeInputPassword = (event: any): void => {

        setValuePassword(event.target.value)

        if(event.target.value.length > 5){
            setErrorPassword('error')
            }else{
                setErrorPassword('')
            }
    }

    return (
        <div className="login">
            <div className="login__section">
                <Header firstName='Daniil' lastName='Benyash'/>
                <a href="" className="login__button-back">Back to home</a>
                <h1 className="login__name">Sign In</h1>
                <section className="sign-in">
                    <div className="sign-in__window">

                        <Input label='Email'
                        placeholder='Your email'
                        disabled={false}
                        onChange={changeInputEmail}
                        value={valueEmail}
                        error={errorEmail}/>

                        <div className="sign-in--pading_20">
                            <Input label='Password'
                            placeholder='Your password'
                            disabled={false}
                            onChange={changeInputPassword}
                            value={valuePassword}
                            error={errorPassword}/>
                        </div>

                        <div className="sign-in--pading_16">
                            <a href="" className="sign-in__button-forgot">Forgot password?</a>
                        </div>

                        <p className="sign-in__text">Don't have an account?
                            <a href="" className="sign-in_button-sign-up"> Sign Up</a>
                        </p>

                    </div>

                </section>

                <footer className="login__footer">
                    <p>2022 Blogofolio</p>
                    <p>All rights reserved</p>
                </footer>
            </div>
        </div>
    )
}