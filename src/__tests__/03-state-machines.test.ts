import { test, expect } from '@jest/globals'

import {
  sumMachine,
  selectSum,
  DebounceMachineAction,
  SumMachineAction,
  debounceMachine,
  selectCurrentRequest
} from '../03-state-machines'

test.skip('sumMachine', () => {
  const run = (options: { actions: SumMachineAction[] }): number|undefined => {
    const { actions } = options
    const state = sumMachine.init()

    actions.forEach(action => sumMachine.update(state, action))

    return selectSum(state)
  }

  expect(run({
    actions: [
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ]
  })).toEqual(6)

  expect(run({
    actions: []
  })).toEqual(undefined)
})

test.skip('debounceMachine', () => {
  const run = (options: { interval: number, actions: DebounceMachineAction[], selectTimestamp: number }): number|undefined => {
    const { interval, actions, selectTimestamp } = options

    const state = debounceMachine.init(interval)

    actions.forEach(action => debounceMachine.update(state, action))

    return selectCurrentRequest(state, selectTimestamp)
  }

  // request is still very recent, so we ignore it
  expect(run({
    interval: 300,
    actions: [
      { requestId: 1, timestamp: 0 },
    ],
    selectTimestamp: 0
  })).toEqual(undefined)

  // request has not changed for 300ms, so we can now use it
  expect(run({
    interval: 300,
    actions: [
      { requestId: 1, timestamp: 0 },
    ],
    selectTimestamp: 300
  })).toEqual(1)

  // request has been replaced and is still too recent, so ignore it
  expect(run({
    interval: 300,
    actions: [
      { requestId: 1, timestamp: 0 },
      { requestId: 2, timestamp: 200 },
    ],
    selectTimestamp: 300
  })).toEqual(undefined)

  // replacement request is now old enough, so we can now use it
  expect(run({
    interval: 300,
    actions: [
      { requestId: 1, timestamp: 0 },
      { requestId: 2, timestamp: 200 },
    ],
    selectTimestamp: 500
  })).toEqual(2)

  // even though request #2 is old enough, it has since been replaced and is too recent
  expect(run({
    interval: 300,
    actions: [
      { requestId: 1, timestamp: 0 },
      { requestId: 2, timestamp: 200 },
      { requestId: 3, timestamp: 700 },
    ],
    selectTimestamp: 700
  })).toEqual(undefined)

  expect(run({
    interval: 300,
    actions: [],
    selectTimestamp: 0
  })).toEqual(undefined)
})
