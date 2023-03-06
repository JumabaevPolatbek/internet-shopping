import {useGetSingleProductQuery} from "../../store/api/product";
import CircularProgress from "@mui/material/CircularProgress";
import {Typography} from "@mui/material";

type Props={
    id:number
}

export function OrderProducts({id}:Props){
    const {data,isLoading} = useGetSingleProductQuery(id)
    if(isLoading){
        return <CircularProgress/>
    }
    return(

            <div
                className="flex justify-content items-center"
            >
                <div
                    className="w-[100px] h-[100px]"
                >
                    <img 
                    src={data?.images[0].image_path} 
                    alt={data?.name}
                     />

                </div>
                <Typography
                    variant="body1"
                >
                    {data?.name}
                </Typography>
            </div>

    )
}