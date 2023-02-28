import {Button, Typography} from "@mui/material";


export function NotProductFovorites(){
    return(
        <div
            className="flex flex-col items-center py-[15px]"
        >
            <Typography
                variant="h4"
                sx={{
                    padding:'15px 0'
                }}
            >
                У вас нет избранных продуктов!
            </Typography>
            <Button
                variant="contained"
                color="error"
                href={'/'}
            >
                Перейти на главную страницу
            </Button>
        </div>
    )
}