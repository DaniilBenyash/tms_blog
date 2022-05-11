import React, { useState } from "react";
import './Registration.scss';

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

                <section className="sign-in">

                    <div className="sign-in__window">

                        <div className="sign-in--pading_20">

                        </div>
                        
                        <div className="sign-in--pading_20">

                        </div>

                        <div className="sign-in--pading_20">

                        </div>
                        
                        <div className="sign-in--pading_16">
                            <a href="" className="sign-in__button-forgot">Forgot password?</a>
                        </div>

                        <p className="sign-in__text">Already have an account?
                            <a href="" className="sign-in_button-sign-up"> Sign Up</a>
                        </p>

                    </div>
                </section>
            </div>
        </div>
    )
}