import React, { useState, useRef, useEffect } from "react";
import './SignIn.scss';
import { Input } from "../../components/Input";
import { SignForm } from '../../components/SignForm/SignForm'
import { NamePage } from "../../components/NamePage/NamePage";
import { Button } from "../../components/Button";
import { useLogin } from "../../features/login";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

export const SignIn = () => {
    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const inputEmail = React.useRef<HTMLInputElement>(null);
    const inputPassword = React.useRef<HTMLInputElement>(null);
    
    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)

    const login = useAppSelector(state => state.login);

    const { signInUser } = useLogin();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            email: valueEmail,
            password: valuePassword
        }

        signInUser(formData);

        {login.token 
        &&
        navigate('/')}
    }

    useEffect(() => {   
        if(login.error){
            {login.error.email && setErrorEmail(login.error.email[0])}
            {login.error.password && setErrorPassword(login.error.password[0])}
        }
    }, [login.error])

    useEffect(() => {
        inputEmail.current?.addEventListener('focus', () => setErrorEmail(''));    
        inputPassword.current?.addEventListener('focus', () => setErrorPassword(''));
        return () => {
            inputEmail.current?.removeEventListener('focus', () => setErrorEmail(''));    
            inputPassword.current?.removeEventListener('focus', () => setErrorPassword(''));
        }
    })  

    useEffect(() => {
        inputEmail.current?.focus() 
    }, [valueEmail])
    
    return (
        <div className="sign-in">
            <div className="sign-in__section">
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
                            type='email'
                        />,
                        <Input 
                            label='Password'
                            placeholder='Your password'
                            disabled={false}
                            onChange={changeInputPassword}
                            value={valuePassword}
                            error={errorPassword}
                            ref={inputPassword}
                            type='password'
                        />
                    ]}
                    button={
                        <Button 
                            text='Sign In'
                            className='button--primary' 
                            disabled={false}
                            onClick={handleSubmit}
                        />
                    }
                    forgot={true}
                    sign='up'
                />
            </div>
        </div>
    )
}