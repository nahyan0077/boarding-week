import React, { forwardRef, useRef } from 'react'

const Input = forwardRef( ((props,ref) => {
    return (
        <>
            <input type="text"  ref={ref} />
        </>
    )
}))

const ForwardRef = () => {

    const inputRef = useRef()

  return (
    <div>
        <h2>Forward ref</h2>
        <Input  ref={inputRef} />
        <button onClick={()=>{
            inputRef.current.focus()
        }} >  focus </button>
    </div>
  )
}

export default ForwardRef