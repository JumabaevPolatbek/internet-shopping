import { DetailCategory } from "./DetailCategory";
import { DetailProducts } from "./DetailProducts";
// import { DetailUsers } from "./DetailUsers";


export function Dashboard(){
    return(
        <div className="flex flex-wrap justify-between">
            <div>
                <DetailCategory/>
            </div>
            {/* <div>
                <DetailCountry/>
            </div> */}
            <div>
                <DetailProducts/>
            </div>
            <div>
                {/* <DetailUsers/> */}
            </div>
        </div>
        )
}