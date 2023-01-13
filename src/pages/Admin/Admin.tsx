import {Header} from "./Header";
import { SideBarAdmin } from "./SideBarAdmin";

export function Admin() {
    return (
        <div className=" flex items-start">
            <SideBarAdmin/>
            <Header/>
        </div>
    )
}