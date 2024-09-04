import React, { useState } from 'react'

const Test = () => {


    const [obj, setObj] = useState({
        name: "nahyan",
        address: {
            type1: "test1",
            type2: "test2"
        }
    })

    const handleClick = () => {
        setObj( (prev) => ({...prev, address: {...prev.address, type2: "test3"}}))

    }

    

  return (
    <div>
        <h2> {obj.address.type2} </h2>
        <button onClick={handleClick} > change </button>
    </div>
  )
}

export default Test