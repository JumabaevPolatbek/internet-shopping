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
                className="flex flex-col"
            >
                <Typography
                    variant="body1"
                >
                    {data?.name}
                </Typography>
            </div>

    )
}