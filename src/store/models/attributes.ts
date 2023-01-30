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
