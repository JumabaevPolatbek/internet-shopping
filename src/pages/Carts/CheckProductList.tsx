import * as React from 'react';
import {useDispatch} from "react-redux";
import {useGetSingleProductQuery} from "../../store/api/product";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { OrderDetail} from "../../store/models/orders";
import {Divider, } from "@mui/material";
import {BtnActionsCart} from "./BtnActionsCart";


export  function CheckProductList(props:OrderDetail) {
    const {product_id,quantity}=props
    const {data:dataProduct}=useGetSingleProductQuery(product_id)

    return (
        <>
        <div
            className="flex justify-between items-center py-2"
        >
            <div>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <img
                                    src={dataProduct?.images[0].image_path}
                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={dataProduct?.name}
                            secondary={dataProduct?.price + 'x' + quantity} />
                    </ListItem>
                </List>
            </div>
                <BtnActionsCart product_id={product_id} quantity={quantity} dataProduct={dataProduct}/>
            </div>
            <Divider/>
        </>
    );
}