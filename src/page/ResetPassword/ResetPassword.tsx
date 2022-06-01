import React, { useState, useRef, useEffect } from "react";
import './ResetPassword.scss';
import { NamePage } from "../../components/NamePage/NamePage";
import { SignForm } from '../../components/SignForm/SignForm';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const ResetPassword = () => {
    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const inputEmail = React.useRef<HTMLInputElement>(null);

    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)

    const handleSubmit = () => {
        const formData = {
            email: valueEmail
        }
    }

    return (
        <div className="reset-password">
            <section className="reset-password__section">
                <NamePage namePage="Reset Password"/>
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