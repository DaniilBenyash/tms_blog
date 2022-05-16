import React, { useState } from "react";
import './Login.scss';
import { Button } from '../Button/Button'
import { Input } from "../Input";
import { SignForm } from '../SignForm/SignForm'
import { NamePage } from "../NamePage/NamePage";

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
                    button={
                        <Button 
                            text='Sign In' 
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