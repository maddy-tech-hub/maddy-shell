import { configureStore, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const CounterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    inc: (state) => { return state + 1; }
  }
})

const store = configureStore({ reducer: { counter: CounterSlice.reducer } })


function Counter() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter);
  
  const handleClick = () => { dispatch(CounterSlice.actions.inc());}
  return (
    <div>
      <h1> Counter :: {count}</h1>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

function Redux() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
    
  )
}

export default Redux