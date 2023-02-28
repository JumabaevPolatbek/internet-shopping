import './Article.scss';

function Article() {
    return (
        <section className='article'>
            <header>
                <div className="article__caption" style={{ backgroundImage: 'url(./images/fon-800/articles/group-184-5.png)' }}>
                    <div className="wrapper">
                        <p className="theme">абитуриенту</p>
                        <span><img src="./images/share.svg" alt="share" /></span>
                    </div>
                    <h2 className="title">Первые млекопитающие вели менее активную жизнь и жили дольше</h2>
                    <div className="info">
                        <p className="article__date">12 ноября 2020</p>
                        <img src="./images/article.png" alt="article" className='article__img' />
                    </div>
                </div>
                <div className="article__main">
                    <h4>Результаты исследования древнего животного мира опубликовали ученые из Бристольского университета Великобритании.</h4>
                    <p>Данный вид появился на земле примерно 200 миллионов лет назад, разумеется, он не был доминирующим. Его представители – мелкие зверьки, ведущие «подпольный» образ жизни, как нынешние мыши и крысы.</p>
                    <h3>Ранние млекопитающие</h3>
                    <p>Данный вид появился на земле примерно 200 миллионов лет назад, разумеется, он не был доминирующим. Его представители – мелкие зверьки, ведущие «подпольный» образ жизни, как нынешние мыши и крысы.</p>
                    <div className="img">
                        <img src="./images/article-img.png" alt="img" />
                        <p className="img__desc">ИСИЭЗ НИУ ВШЭ (issek.hse.ru)</p>
                    </div>
                    <h3>Выживание и развитие</h3>
                    <p>Данный вид появился на земле примерно 200 миллионов лет назад, разумеется, он не был доминирующим. Его представители – мелкие зверьки, ведущие «подпольный» образ жизни, как нынешние мыши и крысы.</p>
                    <div className="img">
                        <img src="./images/article-img.png" alt="img" />
                        <p className="img__desc">ИСИЭЗ НИУ ВШЭ (issek.hse.ru)</p>
                    </div>
                    <div className="img__gallery">
                        <img src="./images/article-mini-img.png" alt="img__gallery" />
                        <img src="./images/article-mini-img.png" alt="img__gallery" />
                        <img src="./images/article-mini-img.png" alt="img__gallery" />
                    </div>
                    <p>Данный вид появился на земле примерно 200 миллионов лет назад, разумеется, он не был доминирующим. Его представители – мелкие зверьки, ведущие «подпольный» образ жизни, как нынешние мыши и крысы.</p>
                    <ul className='unordered-list'>
                        <caption>Маркированный список</caption>
                        <li>Строительный материал клетки – белок</li>
                        <li>
                            Производственные мощности
                        </li>
                        <li>
                            Скорость ростка клеток и бактерий
                        </li>
                    </ul>
                    <table>
                        <caption>Таблица</caption>
                        <tr>
                            <th>млекопитающие</th>
                            <th>грызуны</th>
                            <th>насекомые</th>
                        </tr>
                        <tr>
                            <td>Белок, клетки</td>
                            <td>Мыши, крысы</td>
                            <td>Бабочки, жуки</td>
                        </tr>
                        <tr>
                            <td>Скорость, вес</td>
                            <td>Выживание</td>
                            <td>Развитие, рост</td>
                        </tr>
                    </table>
                </div>
                <div className="control">
                    <ul className="social__links">
                        <li>
                            <a href="#">
                                <img src="./images/social/telegram.svg" alt="telegram" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./images/social/whatsapp.svg" alt="whatsapp" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./images/social/viber.svg" alt="viber" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./images/social/vk.svg" alt="vk" />
                            </a>
                        </li>
                    </ul>
                    <button className="next-article">следующая статья</button>
                </div>
            </header>
        </section>
    )
}



export default Article;