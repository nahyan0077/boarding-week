import React, { useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0)
    let timer;
    const handleClick = () => {

        setCount(count + 1)
        
        console.log(timer);

        if (timer) {
            clearTimeout(timer)
        }
        
        timer = setTimeout(()=>{
            alert(count)
        },5000)
    }

  return (
    <div>
        <h2> Timer  </h2>
        <h2> {count} </h2>
        <button onClick={handleClick} > click </button>
    </div>
  )
}

export default Timer