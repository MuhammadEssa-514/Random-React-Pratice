import React,{useState,useEffect} from 'react'

function UseEffect() {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable h

  return (
    <>
    <p>Count: {count}</p>
      <button onClick={() => setCount(() => count + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  )
}

export default UseEffect