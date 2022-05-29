import React, { useState, useEffect } from "react";
import './Registration.scss';
import { Button } from '../Button/Button';
import { Input } from "../Input";
import { SignForm } from '../SignForm/SignForm'
import { NamePage } from "../NamePage/NamePage";

export const Registration = () => {
    const [valueName, setValueName] = useState('')
    const [errorName, setErrorName] = useState('')

    const inputName = React.useRef<HTMLInputElement>(null);
    const checkName = /^[a-zA-Zа-яА-Я- ]+$/;

    useEffect(() => {
        inputName.current?.focus()
    }, [valueName])

    const changeInputName = (event: any): void => setValueName(event.target.value)

    const checkInputName = () => {
        {!checkName.test(valueName) && valueName
        &&
        setErrorName('The name must only contain letters')}
    }
    
    const [valueEmail, setValueEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState('')

    const inputEmail = React.useRef<HTMLInputElement>(null);
    const checkEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)

    const checkInputEmail = (): void => {
        {!checkEmail.test(valueEmail) && valueEmail
        &&
        setErrorEmail('Invalid email')}
    }
    
    const [valuePassword, setValuePassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const inputPassword = React.useRef<HTMLInputElement>(null);
    const checkPassword = /^[0-9a-zA-Z]+$/;

    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)

    const checkInputPassword = () => {
        {!checkPassword.test(valuePassword) && valuePassword
        &&
        setErrorPassword('The password must only contain letters and numbers')}
        
        {valuePassword != valueConfirmPassword && valueConfirmPassword
        &&
        setErrorConfirmPassword("Passwords don't match")}
    }
    
    const [valueConfirmPassword, setValueConfirmPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const inputConfirmPassword = React.useRef<HTMLInputElement>(null);

    const changeInputConfirmPassword = (event: any): void => setValueConfirmPassword(event.target.value)

    useEffect(() => {
        inputName.current?.addEventListener('blur', checkInputName);
        inputName.current?.addEventListener('focus', () => setErrorName(''));
        inputEmail.current?.addEventListener('blur', checkInputEmail);
        inputEmail.current?.addEventListener('focus', () => setErrorEmail(''));
        inputPassword.current?.addEventListener('blur', checkInputPassword);
        inputPassword.current?.addEventListener('focus', () => setErrorPassword(''));
        {valueConfirmPassword != valuePassword && valueConfirmPassword != '' && valuePassword != ''
        ?
        setErrorConfirmPassword("Passwords don't match")
        :
        setErrorConfirmPassword('')}
        return () => {
            inputName.current?.removeEventListener('blur', checkInputName);
            inputName.current?.removeEventListener('focus', () => setErrorName(''));
            inputEmail.current?.removeEventListener('blur', checkInputEmail);
            inputEmail.current?.removeEventListener('focus', () => setErrorEmail(''));
            inputPassword.current?.removeEventListener('blur', checkInputPassword);
            inputPassword.current?.removeEventListener('focus', () => setErrorPassword(''));
        }
    })
    
    return (
        <div className="registration">
            <div className="registration__section">
            <NamePage namePage="Sign Up"/>
                <SignForm
                    inputs={[
                        <Input 
                            label='Name'
                            placeholder='Your name'
                            disabled={false}
                            onChange={changeInputName}
                            value={valueName}
                            error={errorName}
                            ref={inputName}
                        />,
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
                        />,
                        <Input 
                            label='Confirm Password'
                            placeholder='Confirm Password'
                            disabled={false}
                            onChange={changeInputConfirmPassword}
                            value={valueConfirmPassword}
                            error={errorConfirmPassword}
                            ref={inputConfirmPassword}
                        />
                    ]}
                    forgot={false}
                    buttonName='Sign Up'
                    sign='in'
                />
            </div>
        </div>
    )
}