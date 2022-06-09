import React, { useState, useRef, useEffect } from "react";
import './NewPassword.scss';
import { NamePage } from "../../components/NamePage/NamePage";
import { SignForm } from '../../components/SignForm/SignForm';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNewPassword } from '../../features/newPassword/useNewPassword';
import { useNavigate } from "react-router-dom";

export const NewPassword = () => {
    const [valueUid, setValueUid] = useState('');
    const [errorUid, setErrorUid] = useState('');
    const [valueToken, setValueToken] = useState('');
    const [errorToken, setErrorToken] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const inputUid = React.useRef<HTMLInputElement>(null);
    const inputToken = React.useRef<HTMLInputElement>(null);
    const inputPassword = React.useRef<HTMLInputElement>(null);
 
    
    const changeInputUid = (event: any): void => setValueUid(event.target.value)
    const changeInputToken = (event: any): void => setValueToken(event.target.value)
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)

    const { setNewPassword } = useNewPassword();
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            uid: valueUid,
            token: valueToken,
            new_password: valuePassword,
        }
        
        setNewPassword(formData)

        navigate('/')
    }

    useEffect(() => {
        const focusUid = () => setErrorUid('')
        const focusToken = () => setErrorToken('')
        const focusPassword = () => setErrorPassword('')
        
        inputUid.current?.addEventListener('focus', focusUid)
        inputToken.current?.addEventListener('focus', focusToken)
        inputPassword.current?.addEventListener('focus', focusPassword);

        return () => {
            inputUid.current?.removeEventListener('focus', focusUid)
            inputToken.current?.removeEventListener('focus', focusToken)
            inputPassword.current?.removeEventListener('focus', focusPassword);
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
                        label='New password'
                        placeholder='Your password'
                        disabled={false}
                        onChange={changeInputPassword}
                        value={valuePassword}
                        error={errorPassword}
                        ref={inputPassword}
                        type='password'
                    />,
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