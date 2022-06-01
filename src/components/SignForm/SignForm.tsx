import React, { ReactElement } from "react";
import './SignForm.scss';
import { Link } from 'react-router-dom';

type SignFormProps = {
    inputs: ReactElement[],
    forgot: boolean,
    button: ReactElement,
    sign?: string,
}
export const SignForm = ({inputs, forgot, button, sign}: SignFormProps) => {
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
                    <Link to='/' className="sign-form__button-forgot">Forgot password?</Link>
                </div>}
                
                <div className="sign-form--padding_48">
                    {button}
                </div>
                

                {sign === 'up' 
                && 
                <p className="sign-form__text">Don't have an account?
                    <Link to='/sign-up' className="sign-form_button-sign-up"> Sign Up</Link>
                </p>}

                {sign === 'in'
                &&
                <p className="sign-form__text">Already have an account?
                    <Link to='/sign-in' className="sign-form_button-sign-up"> Sign In</Link>
                </p>}  

            </form>
        </section>
    )
}