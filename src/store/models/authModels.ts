

export interface UserInfo{
    username: string,
    is_admin: boolean,
    password:string
}
export interface UserDetail{
    first_name: string,
    last_name: string,
    user_image:string
}
export interface UserContact{
    phone_number: number,
    type:string
}
export interface UserAddress{
    street_address: string,
    postal_code: number,
    city: string,
    country_id:number
}