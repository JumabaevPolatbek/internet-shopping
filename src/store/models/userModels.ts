import { Countrie } from "./countries"

export interface User {
    username: string
    is_admin: boolean
    id: number
    user_detail: UserDetail
    phone_numbers: PhoneNumber[]
    addresses: Address[]
  }
  
  export interface UserDetail {
    first_name: string
    last_name: string
    user_image: string
    id: number
  }
  
  export interface PhoneNumber {
    phone_number: string
    type: string
    id: number
  }
  
  export interface Address {
    street_address: string
    postal_code: string
    city: string
    id: number
    country: Countrie
}
  
// New User

export interface NewUser {
  username: string,
  is_admin: boolean,
  password:string
}
export interface NewUserDetail {
  first_name: string,
  last_name: string,
  user_image:string
}
export interface NewUserPhones{
  phone_number: string,
  type:string
}
export interface NewUserAddress{
  street_address: string,
  postal_code: number,
  city: string,
  country_id:number
}
