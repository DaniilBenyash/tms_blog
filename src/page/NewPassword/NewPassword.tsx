import React, { useState, useRef, useEffect } from "react";
import './NewPassword.scss';
import { NamePage } from "../../components/NamePage/NamePage";
import { SignForm } from '../../components/SignForm/SignForm';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const NewPassword = () => {
    const [valueUid, setValueUid] = useState('');
    const [errorUid, setErrorUid] = useState('');
    const [valueToken, setValueToken] = useState('');
    const [errorToken, setErrorToken] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [valueConfirmPassword, setValueConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const inputUid = React.useRef<HTMLInputElement>(null);
    const inputToken = React.useRef<HTMLInputElement>(null);
    const inputPassword = React.useRef<HTMLInputElement>(null);
    const inputConfirmPassword = React.useRef<HTMLInputElement>(null);
    
    const changeInputUid = (event: any): void => setValueUid(event.target.value)
    const changeInputToken = (event: any): void => setValueToken(event.target.value)
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)
    const changeInputConfirmPassword = (event: any): void => setValueConfirmPassword(event.target.value)

    const handleSubmit = () => {

    }

    useEffect(() => {
        inputUid.current?.addEventListener('focus', () => setErrorUid(''))
        inputToken.current?.addEventListener('focus', () => setErrorToken(''))
        inputPassword.current?.addEventListener('focus', () => setErrorPassword(''));

        {valueConfirmPassword != valuePassword
        ?
        setErrorConfirmPassword("Passwords don't match")
        :
        setErrorConfirmPassword('')}

        return () => {
            inputUid.current?.removeEventListener('focus', () => setErrorUid(''))
            inputToken.current?.removeEventListener('focus', () => setErrorToken(''))
            inputPassword.current?.removeEventListener('focus', () => setErrorPassword(''));
        }
    })

    useEffect(() => {
        inputPassword.current?.focus()
        setErrorPassword('');
    }, [valuePassword])

    return (
        <div className="new-password">
            <section className="new-password__section">
                <NamePage namePage="New Password"/>
                <SignForm 
                    inputs={[
                        <Input 
                        label='Uid'
                        placeholder='Your uid'
                        disabled={false}
                        onChange={changeInputUid}
                        value={valueUid}
                        error={errorUid}
                        ref={inputUid}
                    />,
                    <Input 
                        label='Token'
                        placeholder='Your token'
                        disabled={false}
                        onChange={changeInputToken}
                        value={valueToken}
                        error={errorToken}
                        ref={inputToken}
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
                            text='Set password'
                            className='button--primary' 
                            disabled={false}
                            onClick={handleSubmit}
                        />
                    }
                    forgot={false}
                />
            </section>
        </div>
    )
}