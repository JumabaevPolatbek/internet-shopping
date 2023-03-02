import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
export function SocialIcons(){
    return(
        <div
        className=" flex justify-between items-center"
        >
            <div
                className="w-[50px] h-[50px]"
            >
                <TelegramIcon/>
            </div>
            <div
                className="w-[50px] h-[50px]"
            >
                <InstagramIcon/>
            </div>
            <div
                className="w-[50px] h-[50px]"
            >
                <TwitterIcon/>
            </div>
            <div
                className="w-[50px] h-[50px]"
            >
                <FacebookIcon/>
            </div>
        </div>
    )
}