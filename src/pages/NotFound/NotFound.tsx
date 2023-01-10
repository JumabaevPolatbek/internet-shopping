import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="flex justify-center items-center h-[300px]">
            <div className="w-[500px] flex flex-col items-center">
                <h1 className="text-[30px] md:text-[34px]">Page Not Found</h1>
                <h3 className="text-[24px] md:text-[28px]">This url is not correct</h3>
                <Link to={'/'} className="text-[18px] px-3 py-2 border border-white rounded bg-red-300 text-white hover:bg-red-600 duration-100">Go To Home</Link>
            </div>
        </div>
    )
}