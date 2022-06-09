import React, { useState, useEffect } from "react";
import './Verify.scss';
import { Button } from '../../components/Button/Button';
import { Input } from "../../components/Input";
import { SignForm } from '../../components/SignForm/SignForm'
import { NamePage } from "../../components/NamePage/NamePage";
import { useNavigate } from "react-router-dom";
import { useVerify } from "../../features/verify";
import { useAppSelector } from "../../redux/hooks";

export const Verify = () => {
    const [valueUid, setValueUid] = useState('');
    const [errorUid, setErrorUid] = useState('');
    const [valueToken, setValueToken] = useState('');
    const [errorToken, setErrorToken] = useState('');

    const inputUid = React.useRef<HTMLInputElement>(null);
    const inputToken = React.useRef<HTMLInputElement>(null);

    const changeInputUid = (event: any): void => setValueUid(event.target.value)
    const changeInputToken = (event: any): void => setValueToken(event.target.value)

    const verify = useAppSelector(state => state.verify);

    const { verifyToken } = useVerify();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            uid: valueUid,
            token: valueToken
        }

        verifyToken(formData);

        {verify.token
        &&
        navigate('../sign-in')}
    }

    useEffect(() => {
        if(verify.error){
            {verify.error.uid && setErrorUid(verify.error.uid[0])}
            {verify.error.token && setErrorToken(verify.error.token[0])}
        }
    }, [verify.error])
    
    useEffect(() => {
        const focusUid = () => setErrorUid('')
        const focusToken = () => setErrorToken('')

        inputUid.current?.addEventListener('focus', focusUid)
        inputToken.current?.addEventListener('focus', focusToken)
        return () => {
            inputUid.current?.removeEventListener('focus', focusUid)
            inputToken.current?.removeEventListener('focus', focusToken)
        }
    })

    useEffect(() => {
        inputUid.current?.focus()
    }, [valueUid])

    return (
        <div className="verify">
            <section className="verify__section">
                <NamePage namePage="Verify" />
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
                    ]}
                    button={
                        <Button 
                            text='Verify'
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