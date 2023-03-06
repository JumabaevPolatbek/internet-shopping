export interface ServerResponseOrder {
  order: Order
  order_details: OrderDetail[]
}

export interface Order {
  user_id: number
  order_date: string
  address_id: number
  order_status_id: number
}

export interface OrderDetail {
  product_id: number
  quantity: number
  price: number
}
export interface ResponseOrderStatus {
  status: string
  id: number
}
export interface ResponseOrders {
  user_id: number
  order_date: string
  address_id: number
  id: number
  order_details: OrderDetail[]
  order_status: ResponseOrderStatus
  order_status_id:number
}


export interface OrderDetails {
  order_id: number
  product_id: number
  quantity: number
  price: number
}




