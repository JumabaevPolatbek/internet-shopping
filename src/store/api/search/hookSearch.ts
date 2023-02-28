import { useGetValueCategorysQuery, useGetValueCountriesQuery, useGetValueProductsQuery, useGetValueUsersQuery } from "."


export const hookSearch=(value:'categoires'|'products'|'users'|'countries')=>{
    switch(value){
        case 'categoires':
                return 
        case 'countries':
            return useGetValueCountriesQuery(value)
        case 'products':
            return useGetValueProductsQuery(value)
        case 'users':
            return useGetValueUsersQuery(value)
            default: true
        }
}