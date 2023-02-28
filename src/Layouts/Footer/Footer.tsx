import FooterContact from "../../Components/FooterContact";
import FooterFAQ from "../../Components/FooterFAQ";
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <FooterFAQ />
                <FooterContact />
                <div className="footer__info">
                    <div className="about">
                        <img src="./images/logo-footer.svg" alt="logo" />
                        <p className="description">Единая приёмная комиссия вузов и колледжей по дистанционным программам</p>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                    <ul className="navs">
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                        <li>
                            <a href="#">Направления</a>
                        </li>
                    </ul>
                    <div className="contacts">
                        <div className="contact__info">
                            <p className="phone">+7 (902) 311 36 64</p>
                            <p className="desc__work">Рабочее время: </p>
                            <p className="desc__time"> Пн — Пт с 9.00 до 19.00</p>
                        </div>
                        <ul className='social__links'>
                            <li>
                                <a href="#" className="social-link">
                                    <img src="./images/social/vk.svg" alt="vk" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <img src="./images/social/instagram.svg" alt="instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <img src="./images/social/whatsapp.svg" alt="whatsapp" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="politics-mobile">Политика конфиденциальности</a>
                </div>
                <div className="invite">
                    <a href="#">Подобрать обучение</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;