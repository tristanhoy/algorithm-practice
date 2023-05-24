import { test, expect } from '@jest/globals'

import {
  Product,
  getProductsInBudget,
  getCategoryList,
  countProductsByCategory,
  indexProductsByCategory,
  getProductNamesForCategory,
  getMostExpensiveProduct,
  getMostExpensiveProductByCategory,
} from '../02-collections'

const products: Product[] = [
  { name: 'Monogram Denim Jacket', category: 'Outerwear', price: 1300 },
  { name: 'Padded Button-Up Vest', category: 'Outerwear', price: 2380 },
  { name: 'Boy Bag', category: 'Bags', price: 8800 },
  { name: 'Mini Triomphe', category: 'Bags', price: 1850 },
  { name: 'Cassette', category: 'Bags', price: 4400 },
  { name: 'Triomphe Belt', category: 'Accessories', price: 940 },
  { name: 'Airpods Pro Case', category: 'Accessories', price: 350 },
  { name: 'Intrecciato Reversible Belt', category: 'Accessories', price: 1150 }
]

test.skip('getProductsInBudget', () => {
  expect(getProductsInBudget(products, 1000)).toEqual([
    { name: 'Triomphe Belt', category: 'Accessories', price: 940 },
    { name: 'Airpods Pro Case', category: 'Accessories', price: 350 }
  ])

  expect(getProductsInBudget(products, 350)).toEqual([
    { name: 'Airpods Pro Case', category: 'Accessories', price: 350 }
  ])

  expect(getProductsInBudget(products, 100)).toEqual([])

  expect(getProductsInBudget([], 100)).toEqual([])
})

test.skip('getCategoryList', () => {
  expect(getCategoryList(products)).toEqual([
    'Outerwear',
    'Bags',
    'Accessories'
  ])
})

test.skip('countProductsByCategory', () => {
  expect(countProductsByCategory(products)).toEqual({
    Outerwear: 2,
    Bags: 3,
    Accessories: 3
  })
})

test.skip('indexProductsByCategory', () => {
  expect(indexProductsByCategory(products)).toEqual({
    Outerwear: [
      { name: 'Monogram Denim Jacket', category: 'Outerwear', price: 1300 },
      { name: 'Padded Button-Up Vest', category: 'Outerwear', price: 2380 },
    ],
    Bags: [
      { name: 'Boy Bag', category: 'Bags', price: 8800 },
      { name: 'Mini Triomphe', category: 'Bags', price: 1850 },
      { name: 'Cassette', category: 'Bags', price: 4400 },
    ],
    Accesories: [
      { name: 'Triomphe Belt', category: 'Accessories', price: 940 },
      { name: 'Airpods Pro Case', category: 'Accessories', price: 350 },
      { name: 'Intrecciato Reversible Belt', category: 'Accessories', price: 1150 }
    ]
  })

  expect(indexProductsByCategory([])).toEqual({})
})

test.skip('getProductNamesForCategory', () => {
  const index = indexProductsByCategory(products)

  expect(getProductNamesForCategory(index, 'Outerwear')).toEqual([
    'Monogram Denim Jacket',
    'Padded Button-Up Vest'
  ])

  expect(getProductNamesForCategory(index, 'Hats')).toEqual([])
})

test.skip('getMostExpensiveProduct', () => {
  expect(getMostExpensiveProduct(products)).toEqual({ name: 'Boy Bag', category: 'Bags', price: 8800 })

  expect(getMostExpensiveProduct([])).toEqual(null)
})

test.skip('getMostExpensiveProductByCategory', () => {
  const index = indexProductsByCategory(products)

  expect(getMostExpensiveProductByCategory(index)).toEqual({
    Outerwear: { name: 'Padded Button-Up Vest', category: 'Outerwear', price: 2380 },
    Bags: { name: 'Boy Bag', category: 'Bags', price: 8800 },
    Accesories: { name: 'Intrecciato Reversible Belt', category: 'Accessories', price: 1150 }
  })

  const emptyIndex = indexProductsByCategory([])

  expect(getMostExpensiveProductByCategory(emptyIndex)).toEqual({})
})
