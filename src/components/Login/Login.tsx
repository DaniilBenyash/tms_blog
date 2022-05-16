import React, { useState } from "react";
import './Login.scss';
import { Button } from '../Button/Button'
import { Input } from "../Input";

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
                <a href="" className="login__button-back">Back to home</a>
                <h1 className="login__name">Sign In</h1>
                <section className="sign-in-login">
                    <div className="sign-in-login__window">
                        <Input 
                            label='Email'
                            placeholder='Your email'
                            disabled={false}
                            onChange={changeInputEmail}
                            value={valueEmail}
                            error={errorEmail}
                        />
                        <div className="sign-in-login--pading_20">
                            <Input 
                                label='Password'
                                placeholder='Your password'
                                disabled={false}
                                onChange={changeInputPassword}
                                value={valuePassword}
                                error={errorPassword}
                            />
                        </div>
                        <div className="sign-in-login--pading_16">
                            <a href="" className="sign-in-login__button-forgot">Forgot password?</a>
                        </div>
                            <Button 
                                text='Sign In' 
                                onClick={() => console.log('Text')} 
                                className='button--primary' 
                                disabled={false}
                            />            
                        <p className="sign-in-login__text">Don't have an account?
                            <a href="" className="sign-in-login_button-sign-up"> Sign Up</a>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}