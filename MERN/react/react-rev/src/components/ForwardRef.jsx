import React, { forwardRef, useRef } from 'react'

const InputChild = forwardRef((props, ref) => {
  return (
    <input type={props.type} ref={ref} />
  )
})


const ForwardRef = () => {

  const inputRef = useRef()
  const handleClick = () => {
    console.log(inputRef.current);
    inputRef.current.style.backgroundColor = 'red'
  }

  return (
    <div>
        <InputChild type="text" ref={inputRef} />
        <button onClick={handleClick} > click </button>
    </div>
  )
}

export default ForwardRef