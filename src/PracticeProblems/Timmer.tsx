import React, { useEffect, useState } from 'react'

function Timmer() {
  const [sec, setSec] = useState(0);

  useEffect(
    () => {
      const int = setInterval(
        () => {
          setSec(prev => prev + 1);
        }, 1000);
      
        return () => clearInterval(int);
    }, [])
  return (
    <div>Timmer : {sec}</div>
  )
}

export default Timmer