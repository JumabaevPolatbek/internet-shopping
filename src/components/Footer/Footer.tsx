import { CallOrder } from "./CallOrder";
import {SocialIcons} from "./SocialIcons";
import {PaymentsIcon} from "./PaymentsIcon";



export function Footer(){
    return(
        <footer
            className="bg-[#f2f2f2] pt-[15px] mt-10"
        >
            <div
                className="container mx-auto px-[15px] flex flex-col"
            >
                <CallOrder/>
                <div
                    className="flex justify-between py-2"
                >
                    <SocialIcons/>
                    <PaymentsIcon/>
                </div>
            </div>

        </footer>
    )
}