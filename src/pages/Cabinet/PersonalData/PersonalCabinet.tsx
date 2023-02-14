import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { PersonalInfo } from "./PersonalInfo";


export function PersonalCabinet() {
    const arrInfo=['Персональные данные','ID пользователя','Имя и фамилия','Номер телефона','Адресс','Электронная почта']
    return (
        
            <div
                className="flex flex-col justify-between h-[400px] border rounded-md py-3 px-3 w-[470px] xl:w-[50%]"
            >
                <Typography sx={{fontSize:20}} gutterBottom variant="h5">
                        Персональные данные 
                </Typography>
                {arrInfo.map((title,index) => (
                    <PersonalInfo title={ title} key={index} />
                ))}
                <Button
                    variant="contained"
                    color="error"
                    className="mt-2 self-start"
                >
                    Изменить
                </Button>
            </div>
    )
}