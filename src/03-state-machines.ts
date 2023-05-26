export type SumMachineState = {
  // ?
}

export type SumMachineAction = {
  value: number
}

export const sumMachine = {
  init: (): SumMachineState => {
    throw new Error('not yet implemented')
  },
  update: (state: SumMachineState, action: SumMachineAction): void => {
    // mutate the state (don't return a new object)
    throw new Error('not yet implemented')
  }
}

export function selectSum (state: SumMachineState): number|undefined {
  throw new Error('not yet implemented')
}


export type DebounceMachineState = {
  // ?
}

export type DebounceMachineAction = {
  requestId: number
  timestamp: number
}

export const debounceMachine = {
  init: (interval: number): DebounceMachineState => {
    throw new Error('not yet implemented')
  },
  update: (state: DebounceMachineState, action: DebounceMachineAction): void => {
    // mutate the state (don't return a new object)
    throw new Error('not yet implemented')
  }
}

export function selectCurrentRequest (state: DebounceMachineState, timestamp: number): number|undefined {
  throw new Error('not yet implemented')
}
