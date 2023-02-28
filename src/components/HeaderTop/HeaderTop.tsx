import './HeaderTop.scss';
import { useState } from 'react';
import { Navs, NavItem } from '../HeaderMiddle/HeaderMiddle';
import { v4 as uuid } from 'uuid';

function HeaderTop() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div className="header-top" onClick={handleClick}>
            <p className={`hamburger-menu ${openMenu ? 'open' : 'close'}`}>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <div className="header__logo">
                <img src="./images/logo.svg" alt="logo" />
            </div>
            <div className="header-top__control">
                <div className="header-top__social">
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

                <div className="header__contact">
                    <a href="tel:+998933623621" className='mobile-phone-logo'>
                        <img src="./images/phone.svg" alt="phone" />
                    </a>
                    <img src="./images/avatar.svg" alt="avatar" />
                    <a href="tel:+998933623621" className='phone-number'>+7 (902) 311 36 64</a>
                    <a href="#" className='header-btn'>Подать документы</a>
                </div>
            </div>

            <div className={`mobile ${openMenu ? 'open' : 'close'}`}>
                <nav>
                    <ul className='menu'>
                        {Navs.map((nav: NavItem) =>
                            <li className='menu__item' key={uuid()}>
                                <a href={nav.href} className='menu__link'>{nav.title}</a>
                            </li>
                        )}
                    </ul>
                </nav>

                <a href="tel:+998933623621" className='phone-number'>+7 (902) 311 36 64</a>
                <p>Рабочее время: Пн — Пт с 9.00 до 19.00</p>
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
                <a href="#" className='header-btn'>Подать документы</a>
                <a href="#" className='politics'>Политика конфиденциальности</a>
            </div>
        </div>
    )
}

export default HeaderTop;