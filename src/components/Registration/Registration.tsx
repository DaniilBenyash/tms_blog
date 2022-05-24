import React, { useState, useEffect } from "react";
import './Registration.scss';
import { Button } from '../Button/Button';
import { Input } from "../Input";
import { SignForm } from '../SignForm/SignForm'
import { NamePage } from "../NamePage/NamePage";

export const Registration = () => {
    const [valueName, setValueName] = useState('')
    const [errorName, setErrorName] = useState('')

    const changeInputName = (event: any): void => {

        setValueName(event.target.value)

        const checkName = /^[a-zA-Zа-яА-Я- ]+$/;

        if(checkName.test(event.target.value) === false && event.target.value != ''){
            setErrorName('The name must only contain letters')
        }else{
            setErrorName('')
        }
    }

    const [valueEmail, setValueEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState('')

    const changeInputEmail = (event: any): void => {

        setValueEmail(event.target.value)

        event.target.onblur=function(){

            const checkEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

            if(checkEmail.test(event.target.value) === false && event.target.value != ''){
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

        const checkPassword = /^[0-9a-zA-Z]+$/;

        if(checkPassword.test(event.target.value) === false && event.target.value != ''){
            setErrorPassword('The password must only contain letters and numbers')
        }else{
            setErrorPassword('')
        }
        if(event.target.value != valueConfirmPassword && valueConfirmPassword != ''){
            setErrorConfirmPassword("Passwords don't match")
        }else{
            setErrorConfirmPassword('')
        }
    }
    
    const [valueConfirmPassword, setValueConfirmPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const changeInputConfirmPassword = (event: any): void => {

        setValueConfirmPassword(event.target.value)

        if(event.target.value != valuePassword && event.target.value != '' && valuePassword != ''){
            setErrorConfirmPassword("Passwords don't match")
        }else{
             setErrorConfirmPassword('')
        }
    }

    const inputName = React.useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        inputName.current?.focus()
    }, [valueName])

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
                            />,
                        <Input 
                            label='Password'
                            placeholder='Your password'
                            disabled={false}
                            onChange={changeInputPassword}
                            value={valuePassword}
                            error={errorPassword}
                        />,
                        <Input 
                            label='Confirm Password'
                            placeholder='Confirm Password'
                            disabled={false}
                            onChange={changeInputConfirmPassword}
                            value={valueConfirmPassword}
                            error={errorConfirmPassword}
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