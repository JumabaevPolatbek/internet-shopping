import { useState } from 'react';
import Departures from '../../Components/Departures';
import './DeparturesSection.scss';

export type DataType = {
    id: number;
    title: string;
    backgroundImageUrl: string;
    icon: string;
    extraInfo: string[]
}

const data: DataType[] = [
    {
        id: 1,
        title: 'Банковское дело',
        backgroundImageUrl: './images/fon_departure/1.png',
        icon: './images/icon_departure/1.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 2,
        title: 'Бизнес-информатика',
        backgroundImageUrl: './images/fon_departure/2.png',
        icon: './images/icon_departure/2.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 3,
        title: 'Гостиничный сервис',
        backgroundImageUrl: './images/fon_departure/3.png',
        icon: './images/icon_departure/3.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 4,
        title: 'госуправление',
        backgroundImageUrl: './images/fon_departure/4.png',
        icon: './images/icon_departure/4.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 5,
        title: 'Дефектологическое образование',
        backgroundImageUrl: './images/fon_departure/5.png',
        icon: './images/icon_departure/5.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 6,
        title: 'Дошкольное образование',
        backgroundImageUrl: './images/fon_departure/6.png',
        icon: './images/icon_departure/6.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 1,
        title: 'Банковское дело',
        backgroundImageUrl: './images/fon_departure/1.png',
        icon: './images/icon_departure/1.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 2,
        title: 'Бизнес-информатика',
        backgroundImageUrl: './images/fon_departure/2.png',
        icon: './images/icon_departure/2.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 3,
        title: 'Гостиничный сервис',
        backgroundImageUrl: './images/fon_departure/3.png',
        icon: './images/icon_departure/3.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 4,
        title: 'госуправление',
        backgroundImageUrl: './images/fon_departure/4.png',
        icon: './images/icon_departure/4.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 5,
        title: 'Дефектологическое образование',
        backgroundImageUrl: './images/fon_departure/5.png',
        icon: './images/icon_departure/5.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 6,
        title: 'Дошкольное образование',
        backgroundImageUrl: './images/fon_departure/6.png',
        icon: './images/icon_departure/6.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 1,
        title: 'Банковское дело',
        backgroundImageUrl: './images/fon_departure/1.png',
        icon: './images/icon_departure/1.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 2,
        title: 'Бизнес-информатика',
        backgroundImageUrl: './images/fon_departure/2.png',
        icon: './images/icon_departure/2.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 3,
        title: 'Гостиничный сервис',
        backgroundImageUrl: './images/fon_departure/3.png',
        icon: './images/icon_departure/3.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 4,
        title: 'госуправление',
        backgroundImageUrl: './images/fon_departure/4.png',
        icon: './images/icon_departure/4.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 5,
        title: 'Дефектологическое образование',
        backgroundImageUrl: './images/fon_departure/5.png',
        icon: './images/icon_departure/5.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 6,
        title: 'Дошкольное образование',
        backgroundImageUrl: './images/fon_departure/6.png',
        icon: './images/icon_departure/6.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 1,
        title: 'Банковское дело',
        backgroundImageUrl: './images/fon_departure/1.png',
        icon: './images/icon_departure/1.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 2,
        title: 'Бизнес-информатика',
        backgroundImageUrl: './images/fon_departure/2.png',
        icon: './images/icon_departure/2.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 3,
        title: 'Гостиничный сервис',
        backgroundImageUrl: './images/fon_departure/3.png',
        icon: './images/icon_departure/3.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 4,
        title: 'госуправление',
        backgroundImageUrl: './images/fon_departure/4.png',
        icon: './images/icon_departure/4.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 5,
        title: 'Дефектологическое образование',
        backgroundImageUrl: './images/fon_departure/5.png',
        icon: './images/icon_departure/5.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 6,
        title: 'Дошкольное образование',
        backgroundImageUrl: './images/fon_departure/6.png',
        icon: './images/icon_departure/6.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 1,
        title: 'Банковское дело',
        backgroundImageUrl: './images/fon_departure/1.png',
        icon: './images/icon_departure/1.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 2,
        title: 'Бизнес-информатика',
        backgroundImageUrl: './images/fon_departure/2.png',
        icon: './images/icon_departure/2.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 3,
        title: 'Гостиничный сервис',
        backgroundImageUrl: './images/fon_departure/3.png',
        icon: './images/icon_departure/3.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 4,
        title: 'госуправление',
        backgroundImageUrl: './images/fon_departure/4.png',
        icon: './images/icon_departure/4.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 5,
        title: 'Дефектологическое образование',
        backgroundImageUrl: './images/fon_departure/5.png',
        icon: './images/icon_departure/5.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
    {
        id: 6,
        title: 'Дошкольное образование',
        backgroundImageUrl: './images/fon_departure/6.png',
        icon: './images/icon_departure/6.svg',
        extraInfo: ["от 12 500 ₽ семестр", "от 2,5 лет"]
    },
]

function DeparturesSection() {
    const [partNumber, setPartNumber] = useState(1);

    return (
        <div className='departures-section'>
            <div className="container">
                <h1 className='title'>Направления</h1>
                <ul className="tab">
                    <li className='tab__item' value={1} id={`${partNumber === 1 ? 'active' : null}`} onClick={() => setPartNumber(1)} >Высшее <span>{data.length}</span></li>
                    <li className='tab__item' value={2} id={`${partNumber === 2 ? 'active' : null}`} onClick={() => setPartNumber(2)} >Среднее <span>{data.length}</span> </li>
                    <li className='tab__item' value={3} id={`${partNumber === 3 ? 'active' : null}`} onClick={() => setPartNumber(3)} >ДПО <span>{data.length}</span></li>
                </ul>
                <div className="content">
                    <Departures data={data} />
                </div>
            </div>
        </div>
    )
}

export default DeparturesSection;
