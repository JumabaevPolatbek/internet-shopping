import { combineReducers } from '@reduxjs/toolkit'
import { actionsProduct } from '../api/product';
import { actionsCountrie } from '../api/country';
import { actionsCategories } from '../api/category';
import { actionsUser } from '../api/user';
import { getAll } from '../api/all';
import { editSlice } from './edit';
import { editProduct } from './editProduct';
import { searchValue } from '../api/search';
import { attributes } from './addAtrribute';
import { attributeActions } from '../api/attributes';
import { authUser } from '../api/auth';
import {cartProduct} from "./cartProduct";
import {tokenSlice} from "./tokenSlice";
import {ordersAction} from "../api/orders";

export const rootReducer = combineReducers({
    [actionsCountrie.reducerPath]: actionsCountrie.reducer,
    [actionsCategories.reducerPath]: actionsCategories.reducer,
    [actionsProduct.reducerPath]: actionsProduct.reducer,
    [actionsUser.reducerPath]: actionsUser.reducer,
    [getAll.reducerPath]: getAll.reducer,
    editUser: editSlice.reducer,
    editProduct:editProduct.reducer,
    [searchValue.reducerPath]:searchValue.reducer,
    stateAttribute:attributes.reducer,
    [attributeActions.reducerPath]:attributeActions.reducer,
    [authUser.reducerPath]:authUser.reducer,
    cartProduct:cartProduct.reducer,
    token:tokenSlice.reducer,
    [ordersAction.reducerPath]:ordersAction.reducer
});
export type RootState = ReturnType<typeof rootReducer>