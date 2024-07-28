import React, { useEffect, useState } from 'react'

const Problem1 = () => {
    const [count1, setCount1] = useState(10)
    const [count2, setCount2] = useState(20)
    useEffect(() =>{
        let time = setInterval(() => {
            setCount2((count) => count + 1)
            setCount2((count) => count + 1)
            setCount2((count) => count + 1)
            setCount2((count) => count + 1)
            setCount2((count) => count + 1)
    
        }, 1000);
        return(() =>{
            clearInterval(time)
        })

    },[count2])
    const click = () =>{
        setCount2((count) => count + 1)
        setCount2((count) => count + 1)
        setCount2((count) => count + 1)
        setCount2((count) => count + 1)
        setCount2((count) => count + 1)
    }

  return (
    <div>
        <h2> {count1} </h2>
        <h2> {count2} </h2>
        <button onClick={()=> setCount1(count1 + 1)} > Click 1 </button>
        <button onClick={click} > Click 2 </button>
    </div>
  )
}

export default Problem1