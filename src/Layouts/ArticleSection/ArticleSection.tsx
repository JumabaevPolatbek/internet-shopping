import Article from '../../Components/Article';
import HeroForm from '../../Components/HeroForm';
import './ArticleSection.scss';

function ArticleSection() {
    return (
        <div className="container">
            <div className='article-section'>
                <section>
                    <Article />
                    <aside>
                        <HeroForm />
                        <div className="interesting__section">
                            <h4>Может быть интересно:</h4>
                            <ul className="interesting__news">
                                <li>
                                    <p className="type">Абитуриенту</p>
                                    <p className="text">Ученые: Реальность может оказаться симуляцией с вероятностью 50%</p>
                                </li>
                                <li>
                                    <p className="type">Абитуриенту</p>
                                    <p className="text">Ученые: Реальность может оказаться симуляцией с вероятностью 50%</p>
                                </li>
                                <li>
                                    <p className="type">Абитуриенту</p>
                                    <p className="text">Ученые: Реальность может оказаться симуляцией с вероятностью 50%</p>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )
}

export default ArticleSection;