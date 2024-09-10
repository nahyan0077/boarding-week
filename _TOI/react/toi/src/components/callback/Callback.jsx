import React, { useCallback, useState } from 'react'
import CallbackChild from './CallbackChild'

const Callback = () => {
    console.log("parent");

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    
    const handleClick = () => {
        setCount(count + 1)
        console.log("hello --- ");
        
    }
    const parentClick = useCallback( () => {
        setCount(count1 + 5)
        console.log("patent button");
        
    },[count1])

  return (
    <div>
        <h2> This is callback </h2>
        <button> { count } </button>
        <button> { count1 } </button>
        <br />
        <button onClick={parentClick} > parent button </button>
        <br />
        <br />
        <CallbackChild handleClick={handleClick} text={"click button"} value={1} />
        <CallbackChild handleClick={parentClick} text={"click button1"} value={2} />
    </div>
  )
}

export default Callback