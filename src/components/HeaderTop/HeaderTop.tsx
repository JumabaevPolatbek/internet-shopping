import { Link } from "react-router-dom"

export function HeaderTop() {
    return (
        <div className=" bg-[#da002b] hidden md:block">
            <div className="container mx-auto  px-[5px] py-[10px] md:px-[15px] flex justify-between">

                <div className="left flex items-center">
                    <Link to={'/'} className="text-[#da002b] text-[16px] border bg-white rounded-lg px-2 py-1 leading-normal">
                            0% Рассрочка
                    </Link>
                    <Link to={'/'} className="text-white text-[16px] border border-white bg-[#da002b] rounded-lg px-2 py-1 leading-normal ml-2">
                            Скидки
                    </Link>
                    <Link to={'/'} className="text-white text-[16px] px-2 py-1 leading-normal ml-2">
                            Карта сайта
                    </Link>
                </div>
                <div className="right flex items-center">
                    <span className="text-white text-[16px] leading-normal">+998 (97) 506 69 99</span>
                    <Link to={'/'} className="text-white border border-white rounded-md px-[5px] py-[1px] text-[16px] ml-[10px]">
                        Продовайте с нами
                    </Link>
                    <Link to={'/'} className="text-white text-[14px] ml-[10px]">Кк</Link>
                    <Link to={'/'} className="text-[#ccc] text-[14px] ml-[10px]">Узб</Link>
                    <Link to={'/'} className="text-[#ccc] text-[14px] ml-[10px]">Рус</Link>
                </div>
            </div>
        </div>
    )
}