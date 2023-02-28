import './FooterFAQ.scss';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function FooterFAQ() {

    const [active, setActive] = useState(0);
    console.log(active);

    const handleClick = (e: React.MouseEvent) => {
        const id = (e.target as HTMLSpanElement).id;
        setActive(+id);
    }
    return (
        <div className="footer-faq">
            <h1 className='title'>Вопрос-ответ:</h1>
            <div className="questions">
                {/* [1,2,3,4,5] massiviniń ornında maǵlıwmatlar massivi bolıwı kerek */}

                {[1, 2, 3, 4, 5].map((i: number) =>
                    <div className="question-answer" key={uuid()} >
                        <h3 className="question" id={`${i}`} onClick={handleClick}>
                            <p>Где учиться по удаленной специальности?</p>
                            <span><img src="./images/plus.svg" alt="plus" /></span>
                        </h3>
                        <p className={`answer ${active === i ? 'active' : null}`}>Зачеты и экзамены проходят в виде тестов внутри электронного кабинета по расписанию. Тесты открытые, закрытые, с вариантами, иногда нужно решить задачу или написать эссе. Есть три попытки, можно выбрать лучший результат. Время каждой попытки ограничено, обычно от 30 до 45 минут на тест.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FooterFAQ;