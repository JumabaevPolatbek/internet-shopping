export interface RootAttr {
  attribute: Attribute
  variants: Variant[]
}

export interface Attribute {
  attribute_name: string
  category_id: number
}

export interface Variant {
  value: string
}
export interface RootAttrCategory {
  attribute_name: string
  category_id: number
  id: number
  variants: VariantCategory[]
}

export interface VariantCategory {
  value: string
  id: number
}
