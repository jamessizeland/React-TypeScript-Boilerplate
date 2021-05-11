import React, { useReducer } from 'react';

/*
  An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

  useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
*/
const initialState = { count: 0 };

type Actions = {
  type: 'increment' | 'decrement'; // limit the possible action values
};

const reducer = (state: typeof initialState, action: Actions) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error(`unexpected action type ${action.type}`);
  }
};

const Counter = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Reducer Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
};

export default Counter;
