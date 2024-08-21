import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const countRef = useRef(count)

    useEffect(()=>{
        countRef.current = count
        // setCount1(count)
    },[count])

  return (
    <div>
        <h2> useRef </h2>
        <button> {count} </button>
        <button> {count1} </button>
        <button> {countRef.current} </button>
        <button onClick={()=>setCount((count) => count + 1)} > INCRE </button>

    </div>
  )
}

export default UseRef