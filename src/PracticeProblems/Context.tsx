import React, { createContext, useContext, useState } from 'react'


const countContext = createContext(0);

export const ProviderContext = ({ children }: any) => {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider value={{ count, setCount }}>
      {children}
    </countContext.Provider>
  )
}

function Context() {
  const { count, setCount } = useContext(countContext);
  const handleClick = () => setCount(count + 1);
  return (
    <>
      <div>Context: {count}</div>
      <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default Context