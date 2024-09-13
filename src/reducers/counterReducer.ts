type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'INCREMENT_BY_AMOUNT'; payload: number };

interface CounterState {
  value: number;
}

export const initialState: CounterState = { value: 0 };

export const counterReducer = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'INCREMENT_BY_AMOUNT':
      return { value: state.value + action.payload };
    default:
      return state;
  }
};
