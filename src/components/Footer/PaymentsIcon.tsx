import PaymentIcon from '@mui/icons-material/Payment';
import PaidIcon from '@mui/icons-material/Paid';

export function PaymentsIcon(){
    return(
        <div
            className="flex justify-between items-center"
        >
            <div
                className="w-[50px] h-[50px]"
            >
                <PaymentIcon/>
            </div>
            <div
                className="w-[50px] h-[50px]"
            >
                <PaidIcon/>
            </div>
        </div>
    )
}