export type Countries = Countrie[]

export interface Countrie {
  country_name: string
  id: number
}

// New add country

export type NewCountry = {
  country_name:string
}