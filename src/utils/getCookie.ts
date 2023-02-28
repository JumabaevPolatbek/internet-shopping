import jwtDecode from "jwt-decode";
import { Decode } from "../store/models/jwtDecode";
import { Cookies } from "react-cookie";
import {useDispatch} from "react-redux";
import {login} from "../store/reducer/tokenSlice";

export function useGetCookie() {
    const cookie = new Cookies()
    const dispatch = useDispatch()
    if (cookie.get('token')) {
        dispatch(login(cookie.get('token')))
    }
}