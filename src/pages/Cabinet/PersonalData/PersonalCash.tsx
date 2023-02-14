import { Card, Typography } from "@mui/material";
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';


export function PersonalCash() {
    return (
        <div
            className="flex flex-col justify-between h-[100px] rounded-md border py-2 px-3 bg-[#da002b] text-white w-[200px] xl:w-[50%]"
        >
            <Typography
                component="div"
                className="flex justify-between items-center"
            >
                    <Typography>
                        Баланс
                    </Typography>
                    <Typography>
                        ID: 321321
                    </Typography>
            </Typography>
            <Typography
                component="div"
                className="flex justify-center items-center"
            >
                <AccountBalanceWalletRoundedIcon />
                <Typography
                    variant="h5"
                >
                    0 сум
                </Typography>
            </Typography>
        </div>
    )
}