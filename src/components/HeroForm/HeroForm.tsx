import './HeroForm.scss';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';

const firstStepOptions: string[] = [
    '9 классов',
    '11 классов',
    'Училище',
    'Колледж',
    'Техникум',
    'Неоконченное высшее',
    'Высшее'
]

const secondStepOptions: string[] = [
    'Я не знаю',
    'Гуманитарная',
    'Гуманитарная',
    'Педагогическая'
]

function HeroForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [data, setData] = useState({
        education: '',
        specialty: '',
        name: '',
        telefon: '',
        email: ''
    })


    const changeEducation = (e: React.FormEvent) => {
        const val = (e.target as HTMLInputElement).value;
        setData({ ...data, 'education': val });
    }

    const changeValue = (e: React.FormEvent) => {
        const element = (e.target as HTMLInputElement);
        let prop = element.id;
        let value = element.value;
        setData({ ...data, [prop]: value });
    }

    const specTag = (e: React.MouseEvent) => {
        const val = (e.target as HTMLSpanElement).textContent;
        setData({ ...data, 'specialty': val || '' });
    }

    console.log(data);
    return (
        <div className="hero-form">
            <form action="#">
                <div className="hero-form__info">
                    <div className="form__level">
                        {[1, 2, 3].map((item: number) =>
                            <span key={uuid()} className={`${currentStep >= item ? 'active' : null}`}></span>
                        )}
                    </div>
                    <div className="form__header">
                        <h2 className="form__title">Подобрать обучение</h2>
                        <p>{currentStep} / 3</p>
                    </div>
                </div>
                <div className="form__main">
                    <div className={`form__step-one ${currentStep === 1 ? 'active' : null}`}>
                        <h3>Какое у Вас образование?</h3>
                        <div className="first-step__options">
                            {firstStepOptions.map((option: string, index) =>
                                <div className="option__group" key={uuid()}>
                                    <input type="radio" name="education" id={option} onChange={changeEducation} value={index}
                                        className={`${data.education === `${index}` ? 'checked' : null}`} />
                                    <label htmlFor={option}>{option}</label>
                                </div>
                            )}
                        </div>
                        <button type='button' className="form__btn" disabled={data.education === ""} onClick={() => { setCurrentStep(2) }}> Шаг 1 из 3</button>
                    </div>

                    <div className={`form__step-two ${currentStep === 2 ? 'active' : null}`}>
                        <div className="awesome-input">
                            <input type="text" name="specialty" id="specialty" value={data.specialty} onChange={changeValue} className={`${data.specialty !== '' ? 'filled' : null}`} required />
                            <label htmlFor="specialty">Желаемая специальность</label>
                        </div>
                        <div className="second-step__options">
                            {secondStepOptions.map((option: string) =>
                                <span key={uuid()} onClick={specTag}>{option}</span>
                            )}
                        </div>
                        <button type='button' className="form__btn" disabled={data.specialty === ""} onClick={() => { setCurrentStep(3) }}>Шаг 2 из 3</button>
                    </div>

                    <div className={`form__step-three ${currentStep === 3 ? 'active' : null}`}>
                        <div className="input__group">
                            <div className="awesome-input">
                                <input type="text" name="name" id="name" value={data.name} onChange={changeValue} className={`${data.name !== '' ? 'filled' : null}`} required />
                                <label htmlFor="name">Ваше имя:</label>
                            </div>
                            <div className="awesome-input">
                                <input type="tel" name="telefon" id="telefon" value={data.telefon} onChange={changeValue} className={`${data.telefon !== '' ? 'filled' : null}`} required />
                                <label htmlFor="telefon">Телефон</label>
                            </div>

                            <div className="awesome-input">
                                <input type="email" name="email" id="email" value={data.email} onChange={changeValue} className={`${data.email !== '' ? 'filled' : null}`} required />
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <button className="form__btn">Отправить заявку</button>
                        <p>Нажимая “Отправить”, Вы соглашаетесь с условиями обработки персональных данных</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HeroForm;