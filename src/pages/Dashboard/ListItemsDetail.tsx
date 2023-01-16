import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore} from '@mui/icons-material';
import { Category } from '../../store/models/categories';
import EastIcon from '@mui/icons-material/East';



type Props={
    category:Category
}

export function ListItemDetail({category}:Props){
        const [open, setOpen] = React.useState(true);

        const handleClick = () => {
        setOpen(!open);
        };
    return  (
        <>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <EastIcon/>
                </ListItemIcon>
                <ListItemText primary={category.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <EastIcon/>
                    </ListItemIcon>
                    {category.children_category.map(children=>{
                        return <ListItemText primary={children.name} key={children.id}/>
                    })}
                </ListItemButton>
                </List>
            </Collapse>
    </>
        )
}