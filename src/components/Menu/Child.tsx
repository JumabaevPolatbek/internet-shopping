import { Link } from "react-router-dom"
import { useChildCategoryQuery } from "../../store/api/category"
import { NestedList } from "./NestedList"
import { ListItemButton, ListItemText,List, Collapse } from "@mui/material"



export function ChildList({ parent_id,display }: { parent_id?: number,display?:boolean }) {
    const { data } = useChildCategoryQuery()
    console.log('OK')
    return (
        <>
            {data?.filter(category => category.parent_category?.id === parent_id).
                map(child => {
                    console.log('NO')
                    return (
                        <Collapse
                            key={child.id}
                            in={display}
                            timeout='auto'
                        >
                            <List
                            component="div"
                            
                            disablePadding
                        >
                            <ListItemButton sx={{pl:4}}>
                                <ListItemText primary={child.name } />
                            </ListItemButton>
                    </List>
                        </Collapse>
                        
                )
            })}
        </>
    )
}