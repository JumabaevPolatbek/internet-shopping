import jwtDecode from "jwt-decode";
import { Decode } from "../store/models/jwtDecode";
import { Cookies } from "react-cookie";


export function getCookie(cookie:Cookies) {
    if (cookie.get('token')) {
        return jwtDecode<Decode>(cookie.get('token'))
    }
    return 
}