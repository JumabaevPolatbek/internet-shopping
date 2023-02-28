import { PersonalDetail } from "./PersonalDetail";
import { PersonalCash } from "./PersonalCash";
import { useGetAllUsersQuery } from "../../../store/api/user";
import { Cookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import { Decode } from "../../../store/models/jwtDecode";


export function PersonalData() {
    const { data } = useGetAllUsersQuery()
    const cookie = new Cookies()
    const decode:Decode = jwtDecode(cookie.get('token'))
    const user = data?.find(item => item.username === decode.sub)
    console.log(user)
    return (
        <div
            className="flex flex-col xl:flex-row w-[70%] xl:justify-between"
        >
            <PersonalDetail {...user} />
            <div
                className="flex flex-col w-[50%] items-end"
            >
                <PersonalCash id={user?.id}/>
            </div>
        </div>
    )
}