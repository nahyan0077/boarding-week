import React, { useEffect, useState } from 'react'
import useCounter from '../../hooks/useCounter';

const Counter = () => {

    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const { increment, decrement, reset, counter } = useCounter(1)


    useEffect(() => {
        var intrvl
        if (isRunning) {
            intrvl = setInterval(() => {
                setCount((c) => c + 1)
            }, 500);
        }
        return () =>{
     
                clearInterval(intrvl)
            }
    
    })

    const handleStart = () => {
        setIsRunning(true)
    }
    const handlePause = () => {
        setIsRunning(false)
    }
    const handleReset = () => {
        setIsRunning(false)
        setCount(0)
    }

  return (
    <div>
        <h2>counter</h2>
        <h2> {count} </h2>
        <button onClick={handleStart} > { count > 1 ?  "resume" : "start" } </button>
        <button onClick={handlePause} > pause </button>
        <button onClick={handleReset} > reset </button>
        <br />
        <br />
        <div>
            <h2> {counter} </h2>
            <button onClick={increment } > incre </button>
            <button onClick={decrement } > decre </button>
            <button onClick={reset } > reset </button>

        </div>

    </div>
  )
}

export default Counter