import React, { forwardRef, useRef } from 'react'

const Child = forwardRef((props,ref) => {
    return (
        <>
            <input type="text" placeholder='search' ref={ref} />
        
        </>
    )
})



const ForwardRef = () => {

    const inputRef = useRef()

    const handle = () => {
        inputRef.current.placeholder = "new placeholder"
    }

  return (
    <div>
        <h2> forward ref </h2>
        <Child  ref={inputRef}  />
        <button onClick={handle} > click </button>
    </div>
  )
}

export default ForwardRef