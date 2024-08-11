import React, { useCallback, useState } from 'react'
import ButtonChild from './ButtonChild'

const CallBack = () => {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    const handleClick = useCallback( () => {
        setCount(count + 1)
        console.log("render1");
        
    },[count])
    const handleClick1 = useCallback( () => {
        setCount1(count1 + 1)
        console.log("render2"); 
    },[count1])

  return (
    <div>
        <h2> CallBack </h2>
        <h3> {count} </h3>
        <ButtonChild onClick={handleClick} label={"click1"}  />
        <h3> {count1} </h3>
        <ButtonChild onClick={handleClick1} label={"click2"}  />
    </div>
  )
}

export default CallBack