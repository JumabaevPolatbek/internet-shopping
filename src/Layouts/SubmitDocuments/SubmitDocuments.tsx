import './SubmitDocuments.scss';


function SubmitDocuments() {
    return (
        <div className='submit-documents'>
            <div className="container">
                <div className="documents__info">
                    <h2 className="title">Подать документы</h2>
                    <p className="description">После того, как вы отправите документы мы свяжемся с Вами для уточнения деталей</p>
                    <h3 className="alert">Чтобы начать — выберите учебное заведение</h3>
                    <div className="input-group">
                        <input type="search" name="search" id="search" placeholder='Поиск' />
                        <p className="result">Найдено 6 вузов</p>
                    </div>
                </div>

                <div className="departures">
                    <div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                        <div className="departure__info">
                            <p className="departure__type">Преимущество</p>
                            <h2 className="departure__title">Международный Московский университет</h2>
                            <p className="departure__extra">От 12 500 ₽ семестр</p>
                            <a href="#" className="departure__link">3 направления</a>
                        </div>
                        <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                    </div>
                    <div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                        <div className="departure__info">
                            <p className="departure__type">Преимущество</p>
                            <h2 className="departure__title">Международный Московский университет</h2>
                            <p className="departure__extra">От 12 500 ₽ семестр</p>
                            <a href="#" className="departure__link">3 направления</a>
                        </div>
                        <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                    </div>
                    <div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                        <div className="departure__info">
                            <p className="departure__type">Преимущество</p>
                            <h2 className="departure__title">Международный Московский университет</h2>
                            <p className="departure__extra">От 12 500 ₽ семестр</p>
                            <a href="#" className="departure__link">3 направления</a>
                        </div>
                        <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                    </div>
                    <div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                        <div className="departure__info">
                            <p className="departure__type">Преимущество</p>
                            <h2 className="departure__title">Международный Московский университет</h2>
                            <p className="departure__extra">От 12 500 ₽ семестр</p>
                            <a href="#" className="departure__link">3 направления</a>
                        </div>
                        <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                    </div>
                    <div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                        <div className="departure__info">
                            <p className="departure__type">Преимущество</p>
                            <h2 className="departure__title">Международный Московский университет</h2>
                            <p className="departure__extra">От 12 500 ₽ семестр</p>
                            <a href="#" className="departure__link">3 направления</a>
                        </div>
                        <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                    </div>
                    <div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                        <div className="departure__info">
                            <p className="departure__type">Преимущество</p>
                            <h2 className="departure__title">Международный Московский университет</h2>
                            <p className="departure__extra">От 12 500 ₽ семестр</p>
                            <a href="#" className="departure__link">3 направления</a>
                        </div>
                        <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SubmitDocuments;