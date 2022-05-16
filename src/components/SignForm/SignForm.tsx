import React, { ReactElement } from "react";
import './SignForm.scss'

type SignFormProps = {
    inputs: ReactElement[],
    forgot: boolean,
    button: ReactElement,
    sign?: string,
}
export const SignForm = ({inputs, forgot, button, sign}: SignFormProps) => {

    return (
        <section className="sign-form">
            <div className="sign-form__window">

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
                    {button}
                </div>
                

                {sign === 'up' 
                && 
                <p className="sign-form__text">Don't have an account?
                    <a href="" className="sign-form_button-sign-up"> Sign Up</a>
                </p>}

                {sign === 'in'
                &&
                <p className="sign-in-registration__text">Already have an account?
                    <a href="" className="sign-in-registration_button-sign-in"> Sign In</a>
                </p>}  

            </div>
        </section>
    )
}