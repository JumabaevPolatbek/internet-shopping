import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";



export function PersonalInfo({title}:{title:string}) {
    return (
        <>
            <Typography
            className="flex items-center justify-between "
            component="div"
        >
                <Typography>
                    {title}
                </Typography>
                <Typography>
                    Lorem
                </Typography>
            </Typography><Divider />
        </>
    )
}