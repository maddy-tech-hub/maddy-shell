import React, { useCallback, useEffect, useMemo, useState } from 'react'
function HookComponent() {
  const [count, setCount] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(
    () => {
      const value = setInterval(() => {
        setSec(prev => prev + 1)
      }, 1000);
      return () => clearInterval(value);
    }, [])

  const memoValue = useMemo(
    () => {
      let sum = 0;
      for (let i = 0; i <= 100000000; i++) {
        sum = sum + i;
      }
      return sum;
    }
    , []);


  const callback = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <h1>Count : {count}</h1>
      <h2>Timer : {sec} </h2>
      <p> Expensive Value : {memoValue}</p>
      <button onClick={callback}>Click Me</button>;
    </div>
  )
}

export default HookComponent 