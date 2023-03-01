import { CallOrder } from "./CallOrder";



export function Footer(){
    return(
        <footer
            className="bg-[#f2f2f2] pt-[15px] mt-10"
        >
            <div
                className="container mx-auto px-[15px]"
            >
                <CallOrder/>
            </div>
        </footer>
    )
}