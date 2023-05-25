export type Product = {
  category: string
  brand: string
  name: string
  price: number
}

export function countProductsByCategory (products: Product[]): Record<string, number> {
  throw Error('not yet implemented')
}

export function indexProductsByCategory (products: Product[]): Record<string, Product[]> {
  throw Error('not yet implemented')
}

export function getMostExpensiveProductByCategory (products: Product[]): Record<string, Product> {
  throw Error('not yet implemented')
}

export function countProductsByCategoryByBrand (products: Product[]): Record<string, Record<string, number>> {
  throw Error('not yet implemented')
}
