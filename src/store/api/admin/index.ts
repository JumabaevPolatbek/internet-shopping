import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { pathApi } from "../index";
import { Order, ResponseOrders } from "../../models/orders";
import type { RootState } from "../../index";
import { Cookies } from "react-cookie";
import { NewProduct, Product, RequestProductAttr, UpdateProduct } from "../../models/products";
import { Category, NewCategories } from "../../models/categories";
import { Countrie, NewCountry } from "../../models/countries";
import { NewUserRoot, User } from "../../models/userModels";
import { Attribute, RootAttr, Variant } from "../../models/attributes";

export const adminActions = createApi({
  reducerPath: "adminActions",
  baseQuery: fetchBaseQuery({
    baseUrl: pathApi,
    prepareHeaders: (headers, { getState }) => {
      const cookie = new Cookies();
      console.log('PrepareHeaders',cookie.get("token"));
      if (cookie.get("token")) {
        console.log('If',cookie.get('token'))
        headers.set("Authorization", `Bearer ${cookie.get("token")}`);
      }
      return headers
    },
  }),
  tagTypes: [
    "products",
    "categories",
    "countries",
    "attributes",
    "users",
    "orders",
  ],
  endpoints: (build) => ({
    // Orders actions
    getOrders: build.query<ResponseOrders[], void>({
      query: () => "orders",
    }),
    updateOrder: build.mutation<ResponseOrders, { order_id?: number|undefined,order:Order }>({
      query: ({ order_id,order}) => {
        return {
          url: `orders/${order_id}`,
          method: "PUT",
          headers:{
            'Content-type':'Application/json'
          },
          body:(order)
        };
      },
      invalidatesTags:['orders']
    }),
    delOrder: build.mutation<
      ResponseOrders[],
      { user_id: number; order_id: number }
    >({
      query: ({ user_id, order_id }) => {
        return {
          url: `orders/${user_id}/${order_id}`,
          method: "DELETE",
        };
      },
    }),
    // Product actions
    addNewProduct: build.mutation<NewProduct, Partial<NewProduct>>({
      query: (product) => ({
        url: `products`,
        method: `POST`,
        body: product,
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: build.mutation<
      Product,
      { idProduct: number | undefined; product: Partial<UpdateProduct> }
    >({
      query: ({ idProduct, product }) => ({
        url: `products/${idProduct}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: build.mutation<Product, number>({
      query(id) {
        return {
          url: `products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products"],
    }),
    // Categories actions
    addNewCategory: build.mutation<NewCategories, Partial<NewCategories>>({
      query: (category) => ({
        url: `categories`,
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: category,
      }),
      invalidatesTags: ["categories"],
    }),
    updateCategory: build.mutation<
      Category,
      { idCategory: number | undefined; updateCategory: Partial<NewCategories> }
    >({
      query({ idCategory, updateCategory }) {
        return {
          url: `categories/${idCategory}`,
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: updateCategory,
        };
      },
    }),
    deleteCategory: build.mutation<Category, number | undefined>({
      query(id) {
        return {
          url: `categories/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["categories"],
    }),
    // Countries Actions
    addNewCountrie: build.mutation<NewCountry, Partial<NewCountry>>({
      query: (countrie) => ({
        url: `countries`,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(countrie),
      }),
      invalidatesTags: ["countries"],
    }),
    updateCountrie: build.mutation<
      Countrie,
      { idCountry: string | undefined; country: Partial<NewCountry> }
    >({
      query({ idCountry, country }) {
        return {
          url: `countries/${idCountry}`,
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: country,
        };
      },
      invalidatesTags: ["countries"],
    }),
    deleteCountrie: build.mutation<Countrie, number>({
      query: (id) => {
        return {
          url: `countries/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["countries"],
    }),
    //Add Admin
    addNewUser: build.mutation<NewUserRoot, Omit<NewUserRoot, "user.is_admin">>(
      {
        query(user) {
          const path = user.user.is_admin ? "users/admin" : "users";
          return {
            url: path,
            method: `POST`,
            headers: {
              "Content-type": "application/json",
            },
            body: user,
          };
        },
        invalidatesTags: ["users"],
      }
    ),
    delUser: build.mutation<User, number>({
      query: (id) => {
        return {
          url: `users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["users"],
    }),
    //Action Attributes
    addAttribute: build.mutation<RootAttr, RootAttr>({
      query: (attr) => ({
        url: `attributes`,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: attr,
      }),
      invalidatesTags: ["attributes"],
    }),
    addAttrVariant: build.mutation<Variant, { id: number; value: Variant }>({
      query: ({ id, value }) => ({
        url: `attributes/${id}/variants`,
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: value,
      }),
      invalidatesTags: ["attributes"],
    }),
    updateAttribute: build.mutation<
      RootAttr,
      { id: number; attr: Partial<Attribute> }
    >({
      query: ({ id, attr }) => ({
        url: `attributes/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: attr,
      }),
      invalidatesTags: ["attributes"],
    }),
    deleteAttr: build.mutation<RootAttr, number | undefined>({
      query: (id) => ({
        url: `attributes/${id}`,
        method: "DELETE",
      }),
    }),
    delAttrValue: build.mutation<RootAttr, { idAttr: number; idValue: number }>(
      {
        query: ({ idAttr, idValue }) => ({
          url: `attributes/${idAttr}/variants/${idValue}`,
          method: "DELETE",
        }),
        invalidatesTags: ["attributes"],
      }
    ),
    bundleAttrProduct:build.mutation<RequestProductAttr,{product_id:number,variant_id:number}>({
      query:({product_id,variant_id})=>{
        return {
          url:`products/${product_id}/attributes`,
          method:'POST',
          headers:{
            'Content-Type':"application/JSON"
          },
          body:(variant_id)
        }
      },
      invalidatesTags:['attributes']
    })
  }),
});

export const {
  useGetOrdersQuery,
  useAddAttrVariantMutation,
  useAddAttributeMutation,
  useAddNewCategoryMutation,
  useAddNewCountrieMutation,
  useAddNewProductMutation,
  useAddNewUserMutation,
  useDelAttrValueMutation,
  useDelOrderMutation,
  useDelUserMutation,
  useDeleteAttrMutation,
  useDeleteCategoryMutation,
  useDeleteCountrieMutation,
  useDeleteProductMutation,
  useUpdateAttributeMutation,
  useUpdateCategoryMutation,
  useUpdateCountrieMutation,
  useUpdateProductMutation,
  useUpdateOrderMutation,
  useBundleAttrProductMutation
} = adminActions;
