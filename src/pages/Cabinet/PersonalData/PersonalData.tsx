import { PersonalCabinet } from "./PersonalCabinet";
import { PersonalCash } from "./PersonalCash";



export function PersonalData() {
    return (
        <div
            className="flex flex-col xl:flex-row w-[70%] xl:justify-between"
        >
            <PersonalCabinet />
            <div
                className="flex flex-col w-[50%] items-end"
            >
                <PersonalCash/>
            </div>
        </div>
    )
}