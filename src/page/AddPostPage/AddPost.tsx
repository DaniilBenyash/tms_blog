import React, { useState } from "react";
import './AddPost.scss'
import { NamePage } from "../../components/NamePage/NamePage";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

export const AddPost = () => {
    const [valueTitle, setValueTitle] = useState('');
    const [errorTitle, setErrorTitle] = useState('');
    const [valueLessonNumber, setValueLessonNumber] = useState('');
    const [errorLessonNumber, setErrorLessonNumber] = useState('');
    const [valueImage, setValueImage] = useState('');
    const [valueTextarea, setValueText] = useState('');
     
    const inputTitle = React.useRef<HTMLInputElement>(null);
    const inputLessonNumber = React.useRef<HTMLInputElement>(null);
    const inputImage = React.useRef<HTMLInputElement>(null);
    const textarea = React.useRef<HTMLInputElement>(null);

    const changeInputTitle = (event: any): void => setValueTitle(event.target.value)
    const changeInputLessonNumber = (event: any): void => setValueLessonNumber(event.target.value)
    const changeInputImage = (event: any): void => setValueImage(event.target.value)
    const changeTextarea = (event: any): void => setValueImage(event.target.value)
    
    const handleSubmit = () => {

    }
    return (
        <div className="add-post">
            <section className="add-post__section">
                <NamePage namePage='Add Post'/>
                <div className="add-post__fitst_inputs">
                    <Input 
                        label='Title'
                        placeholder='Add title'
                        disabled={false}
                        onChange={changeInputTitle}
                        value={valueTitle}
                        error={errorTitle}
                        ref={inputTitle}
                    />
                    <Input 
                        label='Lesson number'
                        placeholder='Add lesson number'
                        disabled={false}
                        onChange={changeInputLessonNumber}
                        value={valueLessonNumber}
                        error={errorLessonNumber}
                        ref={inputLessonNumber}
                    />
                </div>
                <label className="add-post__input-image">
                    Image
                    <input type="file" value={valueImage} onChange={changeInputImage} ref={inputImage} className='add-post__input-form'accept="image/*,image/jpeg"/>
                </label>
                <Textarea
                    label='Text'
                    placeholder='Add your text'
                    rows={10}
                    onChange={changeTextarea}
                    value={valueTextarea}
                    ref={textarea}
                />
                <div className="add-post__line-button">
                    <div className="add-post__size-button">
                        <Button 
                            text='Delete post'
                            className='button--secondary2' 
                            disabled={false}
                            onClick={handleSubmit}
                        />
                    </div>
                    
                    <div className="add-post__right-button">
                        <div className="add-post__size-button">
                            <Button 
                                text='Cancel'
                                className='button--secondary' 
                                disabled={false}
                                onClick={handleSubmit}
                            />
                        </div>
                        <div className="add-post__size-button">
                            <Button 
                                text='Add post'
                                className='button--primary' 
                                disabled={false}
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}