import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { rootReducer } from "./reducer";
import { actionsCountrie } from "./api/country";
import { actionsCategories } from "./api/category";
import { actionsProduct } from "./api/product";
import { actionsUser } from "./api/user";
import { getAll } from "./api/all";
import { searchValue } from "./api/search";
// import { editSlice } from "./reducer/edit";
// import logger from 'redux-logger'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        actionsCountrie.middleware,
        actionsCategories.middleware,
        actionsProduct.middleware,
        actionsUser.middleware,
        getAll.middleware,
        searchValue.middleware
    )
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch