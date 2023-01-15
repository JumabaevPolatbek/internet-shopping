
//get All products
export type Products = Product[]

export interface Product {
  name: string
  price: number
  description: string
  quantity: number
  discount: number
  id: number
  images: Image[]
  category: Category
}

export interface Image {
  product_id: number
  product_variants_id: any
  image_path: string
  id: number
}

export interface Category {
  name: string
  id: number
  children_category: ChildrenCategory[]
  parent_category: any
}

export interface ChildrenCategory {
  name: string
  id: number
}
// Add new Product
export interface NewProduct {
  product: AddProduct
  product_images: ProductImage[]
}

export interface AddProduct {
  name: string
  price: number
  description: string
  quantity: number
  discount: number
  category_id: number
}

export interface ProductImage {
  image_path: string
}

//Update Product
export interface UpdateProduct {
  name: string
  price: number
  description: string
  quantity: number
  discount: number
  category_id: number
}

// fake product
export interface ProductFake{
  title: string,
  price: number,
  description: string,
  image: string,
  category:string
}