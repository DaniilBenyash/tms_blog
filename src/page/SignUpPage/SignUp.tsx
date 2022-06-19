import React, { useState, useEffect } from "react";
import './SignUp.scss';
import { Button } from '../../components/Button/Button';
import { Input } from "../../components/Input";
import { SignForm } from '../../components/SignForm/SignForm'
import { NamePage } from "../../components/NamePage/NamePage";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useAuth } from '../../features/auth/useAuth'

export const SignUp = () => {
    const [valueName, setValueName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [valueConfirmPassword, setValueConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const inputName = React.useRef<HTMLInputElement>(null);
    const inputEmail = React.useRef<HTMLInputElement>(null);
    const inputPassword = React.useRef<HTMLInputElement>(null);
    const inputConfirmPassword = React.useRef<HTMLInputElement>(null);

    const changeInputName = (event: any): void => setValueName(event.target.value)
    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)
    const changeInputConfirmPassword = (event: any): void => setValueConfirmPassword(event.target.value)

    const auth = useAppSelector(state => state.auth);

    const { signUpUser } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            username: valueName,
            email: valueEmail,
            password: valuePassword
        }

        {valuePassword === valueConfirmPassword
        &&
        signUpUser(formData)}
            
        {auth.user
        &&
        navigate('../verify')}
    }

    useEffect(() => {
        if(auth.error){
            {auth.error.username  && setErrorName(auth.error.username[0])}
            {auth.error.email && setErrorEmail(auth.error.email[0])}
            {auth.error.password && setErrorPassword(auth.error.password[0])}
        }
    }, [auth.error])

    useEffect(() => {
        const focusName = () => setErrorName('')
        const focusEmail = () => setErrorEmail('')
        const focusPassword = () => setErrorPassword('')

        inputName.current?.addEventListener('focus', focusName);
        inputEmail.current?.addEventListener('focus', focusEmail);
        inputPassword.current?.addEventListener('focus', focusPassword);

        {valueConfirmPassword != valuePassword
        ?
        setErrorConfirmPassword("Passwords don't match")
        :
        setErrorConfirmPassword('')}

        return () => {
            inputName.current?.removeEventListener('focus', focusName);
            inputEmail.current?.removeEventListener('focus', focusEmail);
            inputPassword.current?.removeEventListener('focus', focusPassword);
        }
    })

    useEffect(() => {
        inputName.current?.focus()
        setErrorName('');
    }, [valueName])

    return (
        <div className="sign-up">
            <div className="sign-up__section">
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
                            type='name'
                        />,
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
                        />,
                        <Input 
                            label='Confirm Password'
                            placeholder='Confirm Password'
                            disabled={false}
                            onChange={changeInputConfirmPassword}
                            value={valueConfirmPassword}
                            error={errorConfirmPassword}
                            ref={inputConfirmPassword}
                            type='password'
                        />
                    ]}
                    button={
                        <Button 
                            text='Sign Up'
                            className='button--primary' 
                            disabled={false}
                            onClick={handleSubmit}
                        />
                    }
                    forgot={false}
                    sign='in'
                />
            </div>
        </div>
    )
}