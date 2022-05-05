import React, { useState } from "react";
import './Registration.css';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';


export const Registration = () => {
    const [valueName, setValueName] = useState()
    const [errorName, setErrorName] = useState('')

    const changeInputName = (event: any): void => {

        setValueName(event.target.value)

        if(event.target.value.length > 5){
            setErrorName('error')
            }else{
                setErrorName('')
            }
    }

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
    
    const [valueConfirmPassword, setValueConfirmPassword] = useState()
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const changeInputConfirmPassword = (event: any): void => {

        setValueConfirmPassword(event.target.value)

        if(event.target.value.length > 5){
            setErrorConfirmPassword('error')
            }else{
                setErrorConfirmPassword('')
            }
    }

    return (
        <div className="registration">
            <div className="registration__section">
                <Header firstName='Daniil' lastName='Benyash'/>
                <a href="" className="registration__button-back">Back to home</a>
                <h1 className="registration__name">Sign Up</h1>
                <section className="sign-in">
                    <div className="sign-in__window">

                        <Input label='Name'
                        placeholder='Your name'
                        disabled={false}
                        onChange={changeInputName}
                        value={valueName}
                        error={errorName}/>

                        <div className="sign-in--pading_20">
                            <Input label='Email'
                            placeholder='Your email'
                            disabled={false}
                            onChange={changeInputEmail}
                            value={valueEmail}
                            error={errorEmail}/>
                        </div>
                        
                        <div className="sign-in--pading_20">
                            <Input label='Password'
                            placeholder='Your password'
                            disabled={false}
                            onChange={changeInputPassword}
                            value={valuePassword}
                            error={errorPassword}/>
                        </div>

                        <div className="sign-in--pading_20">
                            <Input label='Confirm Password'
                            placeholder='Confirm Password'
                            disabled={false}
                            onChange={changeInputConfirmPassword}
                            value={valueConfirmPassword}
                            error={errorConfirmPassword}/>
                        </div>
                        
                        <div className="sign-in--pading_16">
                            <a href="" className="sign-in__button-forgot">Forgot password?</a>
                        </div>

                        <p className="sign-in__text">Already have an account?
                            <a href="" className="sign-in_button-sign-up"> Sign Up</a>
                        </p>

                    </div>

                </section>

                <footer className="registration__footer">
                    <p>2022 Blogofolio</p>
                    <p>All rights reserved</p>
                </footer>
            </div>
        </div>
    )
}