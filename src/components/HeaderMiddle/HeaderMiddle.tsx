import './HeaderMiddle.scss';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

export type NavItem = {
    title: string;
    href: string;
}

export const Navs: NavItem[] = [
    {
        title: 'Направление',
        href: '#'
    },
    {
        title: 'Вузы',
        href: '#'
    },
    {
        title: 'Колледжи',
        href: '#'
    },
    {
        title: 'Профессии',
        href: '#'
    },
    {
        title: 'Отзывы',
        href: '#'
    },
    {
        title: 'Учебным заведениям',
        href: '#'
    },
    {
        title: 'Вопрос-ответ',
        href: '#'
    },
    {
        title: 'Статьи',
        href: '#'
    },
    {
        title: 'Как поступит',
        href: '#'
    },
    {
        title: 'Контакты',
        href: '#'
    },
    {
        title: 'Шансы по ЕГЭ',
        href: '#'
    },
    {
        title: 'Extra',
        href: '#'
    }
]


function HeaderMiddle() {
    const [openExtraMenu, setOpenExtraMenu] = useState(false);


    const openMenu = () => {
        setOpenExtraMenu(!openExtraMenu);
    }
    return (
        <div className='header-middle'>
            <nav>
                <ul className='menu'>
                    {Navs.map((nav: NavItem, index: number) =>
                        index < 9
                            ? <li className='menu__item' key={uuid()}>
                                <a href={nav.href} className='menu__link'>{nav.title}</a>
                            </li>
                            : null
                    )}
                    <li className='menu__item extra'>
                        <button className={`menu__btn ${openExtraMenu ? 'active' : null}`} onClick={openMenu}>Еще</button>
                        <nav className={`${openExtraMenu ? 'open' : null}`}>
                            <ul className='extra-menu'>
                                {Navs.map((nav: NavItem, index: number) =>
                                    index >= 9
                                        ? <li className='menu__item' key={uuid()}>
                                            <a href={nav.href} className='menu__link'>{nav.title}</a>
                                        </li>
                                        : null
                                )}
                            </ul>
                        </nav>

                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMiddle;