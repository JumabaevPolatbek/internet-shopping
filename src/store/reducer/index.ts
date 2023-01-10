import { combineReducers } from '@reduxjs/toolkit'
import { productsApi } from '../slice/apiSlice';
import { putData } from '../slice/putDataStore';

export const rootReducer = combineReducers({
    [productsApi.reducerPath]: productsApi.reducer,
    [putData.name]:putData.reducer
});
export type RootState = ReturnType<typeof rootReducer>