import { test, expect } from '@jest/globals'

import {
  countUnique,
  largestNumber,
  secondLargestNumber,
  sum,
  mean,
  mode
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
  expect(secondLargestNumber([1, 2, 3])).toEqual(2)
  expect(secondLargestNumber([1, 3, 2])).toEqual(2)
  expect(secondLargestNumber([1, 3, 3, 5, 5])).toEqual(3)
})

// remove ".skip" when you're ready to start this algorithm
test.skip('sum', () => {
  expect(sum([1, 2, 3])).toEqual(6)
  expect(sum([])).toEqual(0)
})

// remove ".skip" when you're ready to start this algorithm
test.skip('mean', () => {
  expect(mean([1, 2, 3])).toEqual(2)
  expect(mean([10, 20])).toEqual(15)
  expect(mean([])).toEqual(undefined)
})

// remove ".skip" when you're ready to start this algorithm
test.skip('mode', () => {
  expect(mode([1, 1, 1, 2])).toEqual(1)
  expect(mode([1, 2, 3, 4, 5, 5])).toEqual(5)
  expect(mode([1, 1, 2, 2])).toEqual(1)
  // Bonus!!
  // expect(mode([2, 2, 1, 1])).toEqual(1)
  expect(mode([])).toEqual(undefined)
})
