import { Table,TableBody,TableHead,TableRow, TableCell, TableContainer} from "@mui/material"
import { useGetCategoryAttrQuery } from "../../../store/api/attributes"



function ItemsAttr({category_id}:{category_id:number|undefined}){
        const {data}=useGetCategoryAttrQuery(category_id)
    return (
        <TableContainer sx={{maxHeight:200}}>
         <Table  aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        {data?.map((attr)=>(
                                            <TableCell
                                                key={attr.id}
                                            >
                                                {attr.attribute_name}
                                            </TableCell>
                                        ))}
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                {data?.map(attr=>(
                                    <TableCell
                                    key={attr.id}
                                    >
                                        {attr.variants.map(variant=>(
                                            <div 
                                            key={variant.id}
                                            className="py-1"
                                            >{variant.value}</div>
                                        ))}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableBody>
                            </Table>
        </TableContainer>
    )
}

export {ItemsAttr}