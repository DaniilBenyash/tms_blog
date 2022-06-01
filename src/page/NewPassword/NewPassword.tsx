import React, { useState, useRef, useEffect } from "react";
import './NewPassword.scss';
import { NamePage } from "../../components/NamePage/NamePage";
import { SignForm } from '../../components/SignForm/SignForm';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const NewPassword = () => {
    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [valueConfirmPassword, setValueConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const inputPassword = React.useRef<HTMLInputElement>(null);
    const inputConfirmPassword = React.useRef<HTMLInputElement>(null);

    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)
    const changeInputConfirmPassword = (event: any): void => setValueConfirmPassword(event.target.value)

    const handleSubmit = () => {

    }

    useEffect(() => {
       inputPassword.current?.addEventListener('focus', () => setErrorPassword(''));

        {valueConfirmPassword != valuePassword
        ?
        setErrorConfirmPassword("Passwords don't match")
        :
        setErrorConfirmPassword('')}

        return () => {
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
                            text='Reset'
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