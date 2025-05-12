import React, { useReducer } from 'react'

function counterReducer (state:any, action:any)  {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    default:
      return { count: 0 }
  }
}

function Counter() {

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <h1> Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: 'inc' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'dec' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}

export default Counter