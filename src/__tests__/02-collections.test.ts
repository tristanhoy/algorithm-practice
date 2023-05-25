import { test, expect } from '@jest/globals'

import {
  Product,
  countProductsByCategory,
  countProductsByCategoryByBrand,
  indexProductsByCategory,
  getMostExpensiveProductByCategory,
} from '../02-collections'

const products: Product[] = [
  { brand: 'Balmain', name: 'Monogram Denim Jacket', category: 'Outerwear', price: 1300 },
  { brand: 'Bottega Veneta', name: 'Padded Button-Up Vest', category: 'Outerwear', price: 2380 },
  { brand: 'Chanel', name: 'Boy Bag', category: 'Bags', price: 8800 },
  { brand: 'Chanel', name: 'Mini Triomphe', category: 'Bags', price: 1850 },
  { brand: 'Bottega Veneta', name: 'Cassette', category: 'Bags', price: 4400 },
  { brand: 'Chanel', name: 'Triomphe Belt', category: 'Accessories', price: 940 },
  { brand: 'Bottega Veneta', name: 'Airpods Pro Case', category: 'Accessories', price: 350 },
  { brand: 'Bottega Veneta', name: 'Intrecciato Reversible Belt', category: 'Accessories', price: 1150 }
]

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
      { brand: 'Balmain', name: 'Monogram Denim Jacket', category: 'Outerwear', price: 1300 },
      { brand: 'Bottega Veneta', name: 'Padded Button-Up Vest', category: 'Outerwear', price: 2380 },
    ],
    Bags: [
      { brand: 'Chanel', name: 'Boy Bag', category: 'Bags', price: 8800 },
      { brand: 'Chanel', name: 'Mini Triomphe', category: 'Bags', price: 1850 },
      { brand: 'Bottega Veneta', name: 'Cassette', category: 'Bags', price: 4400 },
    ],
    Accessories: [
      { brand: 'Chanel', name: 'Triomphe Belt', category: 'Accessories', price: 940 },
      { brand: 'Bottega Veneta', name: 'Airpods Pro Case', category: 'Accessories', price: 350 },
      { brand: 'Bottega Veneta', name: 'Intrecciato Reversible Belt', category: 'Accessories', price: 1150 }
    ]
  })

  expect(indexProductsByCategory([])).toEqual({})
})

test.skip('getMostExpensiveProductByCategory', () => {
  expect(getMostExpensiveProductByCategory(products)).toEqual({
    Outerwear: { brand: 'Bottega Veneta', name: 'Padded Button-Up Vest', category: 'Outerwear', price: 2380 },
    Bags: { brand: 'Chanel', name: 'Boy Bag', category: 'Bags', price: 8800 },
    Accessories: { brand: 'Bottega Veneta', name: 'Intrecciato Reversible Belt', category: 'Accessories', price: 1150 }
  })

  expect(getMostExpensiveProductByCategory([])).toEqual({})
})

test.skip('countProductsByCategoryByBrand', () => {
  expect(countProductsByCategoryByBrand(products)).toEqual({
    Outerwear: {
      'Balmain': 1,
      'Bottega Veneta': 1
    },
    Bags: {
      'Chanel': 2,
      'Bottega Veneta': 1
    },
    Accessories: {
      'Bottega Veneta': 2,
      'Chanel': 1
    }
  })
})
