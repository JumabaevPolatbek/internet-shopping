// Get Categories
export type Categories = Category[]

export interface Category {
  name: string
  id: number
  children_category: ChildrenCategory[]
  parent_category?: ParentCategory
}

export interface ChildrenCategory {
  name: string
  id: number
}

export interface ParentCategory {
  name: string
  id: number
}
// add new categories
export interface NewCategories{
    name: string,
    parent_category_id:number|null
}