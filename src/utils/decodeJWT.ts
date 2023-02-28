import jwtDecode from "jwt-decode";
import {Decode} from "../store/models/jwtDecode";

export const decodeJWT=(value:string):Decode=>{
    return jwtDecode(value)
}