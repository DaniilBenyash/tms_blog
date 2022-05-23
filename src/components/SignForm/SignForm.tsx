import React, { ReactElement } from "react";
import './SignForm.scss'
import { Button } from '../Button/Button'

type SignFormProps = {
    inputs: ReactElement[],
    forgot: boolean,
    buttonName: string,
    sign?: string,
    onClick: (event: any) => void,
}
export const SignForm = ({inputs, forgot, buttonName, sign, onClick}: SignFormProps) => {

    return (
        <section className="sign-form">
            <form className="sign-form__window">

                {inputs.map((input, index) => {
                    return (
                        <div key={index} className="sign-form--pading_20">
                            {input}
                        </div>
                    )
                })}
                
                {forgot
                &&
                <div className="sign-form--pading_16">
                    <a href="" className="sign-form__button-forgot">Forgot password?</a>
                </div>}
                
                <div className="sign-form--padding_48">
                    <Button 
                        text={buttonName}
                        type='submit'
                        className='button--primary' 
                        disabled={false}
                        onClick={onClick}
                    />
                </div>
                

                {sign === 'up' 
                && 
                <p className="sign-form__text">Don't have an account?
                    <a href="" className="sign-form_button-sign-up"> Sign Up</a>
                </p>}

                {sign === 'in'
                &&
                <p className="sign-form__text">Already have an account?
                    <a href="" className="sign-form_button-sign-up"> Sign In</a>
                </p>}  

            </form>
        </section>
    )
}