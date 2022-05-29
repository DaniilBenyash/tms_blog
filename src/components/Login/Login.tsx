import React, { useState, useRef, useEffect } from "react";
import './Login.scss';
import { Input } from "../Input";
import { SignForm } from '../SignForm/SignForm'
import { NamePage } from "../NamePage/NamePage";

export const Login = () => {
    
    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const inputEmail = React.useRef<HTMLInputElement>(null);
    const checkEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    
    useEffect(() => {
        inputEmail.current?.focus() 
    }, [valueEmail])
    
    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)
    
    const checkInputEmail = (): void => {
        {!checkEmail.test(valueEmail) && valueEmail
        &&
        setErrorEmail('Invalid email')}
    }

    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const inputPassword = React.useRef<HTMLInputElement>(null);
    const checkPassword = /^[0-9a-zA-Z]+$/;

    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)

    const checkInputPassword = (): void => {
        {!checkPassword.test(valuePassword) && valuePassword
        &&
        setErrorPassword('The password must only contain letters and numbers')}
    }

    useEffect(() => {
        inputEmail.current?.addEventListener('blur', checkInputEmail);
        inputEmail.current?.addEventListener('focus', () => setErrorEmail(''));    
        inputPassword.current?.addEventListener('blur', checkInputPassword);
        inputPassword.current?.addEventListener('focus', () => setErrorPassword(''));
        return () => {
            inputEmail.current?.removeEventListener('blur', checkInputEmail);
            inputEmail.current?.removeEventListener('focus', () => setErrorEmail(''));    
            inputPassword.current?.removeEventListener('blur', checkInputPassword);
            inputPassword.current?.removeEventListener('focus', () => setErrorPassword(''));
        }
    })
    
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
                            ref={inputPassword}
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