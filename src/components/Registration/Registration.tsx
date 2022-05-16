import React, { useState } from "react";
import './Registration.scss';
import { Button } from '../Button/Button';
import { Input } from "../Input";
import { SignForm } from '../SignForm/SignForm'
import { NamePage } from "../NamePage/NamePage";

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
                    button={
                        <Button 
                            text='Sign Up' 
                            onClick={() => console.log('Text')} 
                            className='button--primary' 
                            disabled={false}
                        />
                    }
                    sign='up'
                />
            </div>
        </div>
    )
}