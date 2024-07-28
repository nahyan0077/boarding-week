import React, { useState } from 'react'

 const Counter = () => {
    const [count, setCount] = useState(1);
  return (
    <div>
              <h2> {count} </h2>
      <button
        onClick={() => {
          setCount((counter) =>  counter + 1);
          setCount((counter) =>  counter + 1);
          setCount((counter) =>  counter + 1);
          alert(count)
          setCount((counter) =>  counter + 1);
          setCount((counter) =>  counter + 1);
        }}>+</button>
    </div>
  )
}

export default Counter
