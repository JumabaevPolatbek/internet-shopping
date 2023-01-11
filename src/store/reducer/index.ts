import { combineReducers } from '@reduxjs/toolkit'
import { actionsProduct } from '../api/product';
import { actionsCountrie } from '../api/countrie';
import { actionsCategory } from '../api/category';
import { actionsUser } from '../api/user';


export const rootReducer = combineReducers({
    [actionsCountrie.reducerPath]: actionsCountrie.reducer,
    [actionsCategory.reducerPath]: actionsCategory.reducer,
    [actionsProduct.reducerPath]: actionsProduct.reducer,
    [actionsUser.reducerPath]:actionsUser.reducer
});
export type RootState = ReturnType<typeof rootReducer>