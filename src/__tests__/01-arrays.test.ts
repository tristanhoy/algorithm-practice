import { test, expect } from '@jest/globals'

import {
  countUnique,
  largestNumber,
  secondLargestNumnber
} from '../01-arrays'

test('countUnique', () => {
  expect(countUnique([1, 2, 3])).toEqual(3)
  expect(countUnique([1, 2, 2, 3])).toEqual(3)
  expect(countUnique([])).toEqual(0)
  expect(countUnique([2, 2, 2])).toEqual(1)
})

// remove ".skip" when you're ready to start this algorithm
test.skip('largestNumber', () => {
  expect(largestNumber([1, 2, 3])).toEqual(3)
  expect(largestNumber([1, 3, 2])).toEqual(3)
  expect(largestNumber([2])).toEqual(2)
})

// remove ".skip" when you're ready to start this algorithm
test.skip('secondLargestNumnber', () => {
  expect(secondLargestNumnber([1, 2, 3])).toEqual(2)
  expect(secondLargestNumnber([1, 3, 2])).toEqual(2)
  expect(secondLargestNumnber([1, 3, 3, 5, 5])).toEqual(3)
})
