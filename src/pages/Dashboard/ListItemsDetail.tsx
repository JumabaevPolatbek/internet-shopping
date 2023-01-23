import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore} from '@mui/icons-material';
import { Category } from '../../store/models/categories';
import AppsIcon from '@mui/icons-material/Apps';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';


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
                <AppsIcon/>
                </ListItemIcon>
                <ListItemText primary={category.parent_category==null && category.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <HdrStrongIcon/>
                    </ListItemIcon>
                    {category.children_category.map(children=>{
                        return <ListItemText primary={children.name} key={children.id}>
                            {}
                        </ListItemText>
                    })}
                </ListItemButton>
                </List>
            </Collapse>
    </>
        )
}