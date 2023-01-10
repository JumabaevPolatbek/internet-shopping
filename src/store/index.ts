import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { rootReducer } from "./reducer";
// import logger from 'redux-logger'
import { productsApi } from "./slice/apiSlice";

export const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productsApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch