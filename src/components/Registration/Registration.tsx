import React, { useState } from "react";
import './Registration.scss';
import { Button } from '../Button/Button';
import { Input } from "../Input";

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
                <a href="" className="registration__button-back">Back to home</a>
                <h1 className="registration__name">Sign Up</h1>
                <section className="sign-in-registration">
                    <div className="sign-in-registration__window">
                        <Input 
                            label='Name'
                            placeholder='Your name'
                            disabled={false}
                            onChange={changeInputName}
                            value={valueName}
                            error={errorName}
                        />
                        <div className="sign-in-registration--pading_20">
                            <Input 
                                label='Email'
                                placeholder='Your email'
                                disabled={false}
                                onChange={changeInputEmail}
                                value={valueEmail}
                                error={errorEmail}
                            />
                        </div>
                        <div className="sign-in-registration--pading_20">
                            <Input 
                                label='Password'
                                placeholder='Your password'
                                disabled={false}
                                onChange={changeInputPassword}
                                value={valuePassword}
                                error={errorPassword}
                            />
                        </div>
                        <div className="sign-in-registration--pading_20">
                            <Input 
                                label='Confirm Password'
                                placeholder='Confirm Password'
                                disabled={false}
                                onChange={changeInputConfirmPassword}
                                value={valueConfirmPassword}
                                error={errorConfirmPassword}
                            />
                        </div>
                        <div className="sign-in-registration--padding_48">
                            <Button 
                                text='Sign Up' 
                                onClick={() => console.log('Text')} 
                                className='button--primary' 
                                disabled={false}
                            />
                        </div>
                        <p className="sign-in-registration__text">Already have an account?
                            <a href="" className="sign-in-registration_button-sign-in"> Sign In</a>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}