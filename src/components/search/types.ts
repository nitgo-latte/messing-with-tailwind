import { OptionProps } from "rc-select/lib/Option"
export type Mutable<T> = {
  -readonly [P in keyof T]: Mutable<T[P]>
}

export const searchTree = {
  styles: ["cartoon", "futuristic", "realisitc", "painting"],
  contents: ["text", "image", "video"],
  productTypes: ["auto parts", "food & beverage", "apparel", "others"],
} as const

export type FieldName = "style" | "content" | "productType"
export type StyleType = typeof searchTree["styles"][number]
export type ContentType = typeof searchTree["contents"][number]
export type ProductType = typeof searchTree["productTypes"][number]

export type SearchObj = Record<"style", StyleType> &
  Record<"contents", ContentType[]> &
  Record<"productType", ProductType>

export interface OptionCustomProps<T> extends Omit<OptionProps, "children"> {
  children: T
}
