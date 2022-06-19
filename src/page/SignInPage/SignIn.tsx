import React, { useState, useRef, useEffect } from "react";
import './SignIn.scss';
import { Input } from "../../components/Input";
import { SignForm } from '../../components/SignForm/SignForm';
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
    
    const changeInputEmail = (event: any): void => setValueEmail('daniilbenyash22@gmail.com')
    const changeInputPassword = (event: any): void => setValuePassword('test123test123')

    const login = useAppSelector(state => state.login);

    const { signInUser } = useLogin();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            email: valueEmail,
            password: valuePassword
        }

        signInUser(formData);

        // {!login.error
        // &&
        // navigate('/')}
    }

    useEffect(() => {   
        if(login.error){
            {login.error.email && setErrorEmail(login.error.email[0])}
            {login.error.password && setErrorPassword(login.error.password[0])}
        }
    }, [login.error])

    useEffect(() => {
        const focusEmail = () => setErrorEmail('')
        const focusPassword = () => setErrorPassword('')

        inputEmail.current?.addEventListener('focus', focusEmail);    
        inputPassword.current?.addEventListener('focus', focusPassword);
        
        return () => {
            inputEmail.current?.removeEventListener('focus', focusEmail);    
            inputPassword.current?.removeEventListener('focus', focusPassword);
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
                            value='daniilbenyash22@gmail.com'
                            error={errorEmail}
                            ref={inputEmail}
                            type='email'
                        />,
                        <Input 
                            label='Password'
                            placeholder='Your password'
                            disabled={false}
                            onChange={changeInputPassword}
                            value='test123test123'
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