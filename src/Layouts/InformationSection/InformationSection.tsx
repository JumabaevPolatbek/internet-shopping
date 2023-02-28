import Information from '../../Components/Information';
import './InformationSection.scss';

const bigPost = {
    type: 'big',
    title: 'Новости',
    heading: 'Геологи раскрывают окружающую залежи редкоземельных элементов тайну',
    text: 'Группа научных исследователей смогла залежи редкоземельных элементов окружающую залежи редкоземельных элементовv окружающую залежи редкоземельных элементов окружающую залежи редкоземельных элементовокружающую залежи редкоземельных элементов окружающую залежи редкоземельных элементовv окружающую залежи редкоземельных элементов',
    imgSrc: './images/posts/big.png',
    date: '12 ноября 2020'
}

const smallPost = {
    type: 'small',
    title: 'абитуриенту',
    heading: 'Создан антибиотик на основе яда азиатской осы',
    text: 'Ключевым элементом яда  залежи редкоземельных элементов окружающую залежи редкоземельных элементовv окружающую залежи редкоземельных элементовзалежи редкоземельных элементов окружающую залежи редкоземельных элементовv окружающую залежи редкоземельных элементов',
    imgSrc: './images/posts/small.png',
    date: '12 ноября 2020'
}

function InformationSection() {
    return (
        <div className="container">
            <div className='information-section'>
                <h2 className='title'>Полезная информация</h2>
                <div className="information__block">
                    <ul className="information__types">
                        <li className='active'>Все <span>36</span></li>
                        <li>Абитуриенту <span>14</span></li>
                        <li>Переводнику <span>5</span></li>
                        <li>Новости <span>10</span></li>
                    </ul>
                </div>
                <div className="posts">
                    <div className="post-block">
                        <Information data={bigPost} />
                        <div className="small-block">
                            <Information data={smallPost} />
                            <Information data={smallPost} />
                        </div>
                        <div className="small-block">
                            <Information data={smallPost} />
                            <Information data={smallPost} />
                        </div>
                    </div>
                    <div className="post-block">
                        <Information data={bigPost} />
                        <Information data={bigPost} />
                        <div className="small-block">
                            <Information data={smallPost} />
                            <Information data={smallPost} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationSection;

