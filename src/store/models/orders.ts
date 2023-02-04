export type ServerOrder = Order[]

export interface Order {
  full_name: string
  phone_number: string
  start_time: string
  end_time: string
  comment?: string
  id: number
}

