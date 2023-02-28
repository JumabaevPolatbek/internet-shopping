import './FooterContact.scss';


function FooterContact() {
    return (
        <form className="footer-contact">
            <div className="contact__info">
                <h2 className="contact__heading">Ещё вопросы?</h2>
                <p className="contact__text">Задайте их и наш менеджер свяжется с Вами в течение 15 минут</p>
                <div className="contact__user">
                    <img src="./images/avatar.svg" alt="avatar" />
                    <p className="contact__desc">Вам ответит Анастасия — Ваш персональный менеджер</p>
                </div>
            </div>
            <div className="contact__form">
                <div className="input-group">
                    <label htmlFor="contactName">Как Вас зовут?</label>
                    <input type="text" name="contactName" id="contactName" placeholder="Иванов Иван" />
                </div>
                <div className="input-group">
                    <label htmlFor="contactPhone">Ваш телефон</label>
                    <input type="text" name="contactPhone" id="contactPhone" placeholder="+7 (000) 000 00 00" />
                </div>
                <p className="contact__warning">
                    Нажимая кнопку “Задать вопрос”, Вы соглашаетесь с условиями обработки персональных данных
                </p>
            </div>
            <div className="contact__message">
                <div className="input-group">
                    <label htmlFor="message">Напишите свои вопросы:</label>
                    <textarea name="message" id="message" cols={20} rows={10} placeholder="Вы можете задать несколько вопросов"></textarea>
                </div>
                <p className="contact__mobile-warning">
                    Нажимая кнопку “Задать вопрос”,Вы соглашаетесь с условиями обработки персональных данных
                </p>
                <input type="submit" value="Задать вопрос" />
            </div>
        </form>
    )
}

export default FooterContact;