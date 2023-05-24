export type Product = {
  category: string
  name: string
  price: number
}

export function getProductsInBudget (products: Product[], maxPrice: number): Product[] {
  throw new Error('not yet implemented')
}

export function getCategoryList (products: Product[]): string[] {
  throw new Error('not yet implemented')
}

export function countProductsByCategory (products: Product[]): Record<string, number> {
  throw new Error('not yet implemented')
}

export function indexProductsByCategory (products: Product[]): Record<string, Product[]> {
  throw new Error('not yet implemented')
}

export function getProductNamesForCategory (index: Record<string, Product[]>, category: string): Product[] {
  throw new Error('not yet implemented')
}

export function getMostExpensiveProduct (products: Product[]): Product|null {
  throw new Error('not yet implemented')
}

export function getMostExpensiveProductByCategory (index: Record<string, Product[]>): Record<string, Product> {
  throw new Error('not yet implemented')
}
