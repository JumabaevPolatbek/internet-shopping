import './HeroBanner.scss'

function HeroBanner() {
    return (
        <div className="hero-banner" style={{backgroundImage: "url(/images/fon-800/city/group_184_5.png)"}}>
            <h1 className='hero-title' >
                Образование онлайн в Нижнем Новгороде
                <div className='share__btn'>
                    <img src="./images/share.svg" alt="share" />
                </div>
            </h1>
            <p className="hero-text">
                Мы — единая приёмная комиссия вузов и колледжей по программам дистанционного обучения
            </p>
            <div className="hero-info">
                <ul className='hero-stat'>
                    <li>от 12 500 ₽</li>
                    <li>от 2,5 лет</li>
                    <li>100% онлайн</li>
                </ul>
                <div className="hero-avatar">
                    <img src="./images/hero-avatar.svg" alt="univer-avatar" />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;