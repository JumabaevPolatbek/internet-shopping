import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './../index';
import { Product } from "../models/products";

const initialState: Product = {
    name: '',
    price: 0,
    description: '',
    quantity: 0,
    discount:0,
    images: [
        {
            image_path: '',
            product_id: 0,
            product_variants_id: 0,
            id:0
        },
        {
            image_path: '',
            product_id: 0,
            product_variants_id: 0,
            id:0
        }
    ],
    id: 0,
    category: {
        name: '',
        id: 0,
        parent_category: null,
        children_category:[]
    }

}

export const editProduct = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        getProduct: (state, action: PayloadAction<Product>) => {
            // state.category = action.payload.category
            // state.name = action.payload.name
            // state.description = action.payload.description
            // state.discount=action.payload.discount
            // state.id=action.payload.id
            // state.price=action.payload.price
            // state.images=action.payload.images
            // state.quantity=action.payload.quantity
            state=action.payload
        }
    }
})

export const updateProduct = (state: RootState) => state.editProduct
export const {getProduct}=editProduct.actions
