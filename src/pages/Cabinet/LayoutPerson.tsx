import { Link, useLocation  } from "react-router-dom";

export function LayoutPerson() {
    const location = useLocation();
    console.log(location)
    return(
        <div className="container flex flex-col items-start mx-auto">
            <div>
                <Link className="text-red-600 text-[24px]" to={'/'}>Главная</Link>
                <span className="mx-4">/</span>
                <Link to={'/cabinet/personal'} className="text-[24px]">Кабинет</Link>
            </div>
            <div className="flex flex-col md:flex-row">
                
            </div>
        </div>
    )
}