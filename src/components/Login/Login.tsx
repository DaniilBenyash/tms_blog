import React, { useState, useRef, useEffect } from "react";
import './Login.scss';
import { Input } from "../Input";
import { SignForm } from '../SignForm/SignForm'
import { NamePage } from "../NamePage/NamePage";

export const Login = () => {
    
    const [valueEmail, setValueEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    
    const changeInputEmail = (event: any): void => {
        
        setValueEmail(event.target.value)
        
        event.target.onblur=function(){

            const checkEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

            if(checkEmail.test(event.target.value) === false && event.target.value != '' ){
                setErrorEmail('Invalid email')     
            }; 
        }
        event.target.onfocus=function(){
            setErrorEmail('')
        }
    }
    const [valuePassword, setValuePassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const changeInputPassword = (event: any): void => {

        setValuePassword(event.target.value)

        event.target.onblur=function(){}
        event.target.onfocus=function(){}
    }

    const inputEmail = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputEmail.current?.focus()
    }, [valueEmail])
    
    return (
        <div className="login">
            <div className="login__section">
                <NamePage namePage="Sign In"/>
                <SignForm
                    inputs={[
                        <Input 
                            label='Email'
                            placeholder='Your email'
                            disabled={false}
                            onChange={changeInputEmail}
                            value={valueEmail}
                            error={errorEmail}
                            ref={inputEmail}
                        />,
                        <Input 
                            label='Password'
                            placeholder='Your password'
                            disabled={false}
                            onChange={changeInputPassword}
                            value={valuePassword}
                            error={errorPassword}
                        />
                    ]}
                    forgot={true}
                    buttonName='Sign In'
                    sign='up'
                />
            </div>
        </div>
    )
}