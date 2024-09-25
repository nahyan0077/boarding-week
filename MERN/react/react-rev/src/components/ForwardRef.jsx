import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const InputChild = forwardRef((props, ref) => {

  const inputRef = useRef()

  const changeBg = () => {
    inputRef.current.style.backgroundColor = 'red'
  }

  useImperativeHandle(ref,()=> ({
    changeBg
  }))


  return (
    <input type={props.type} ref={inputRef} />
  )
})


const ForwardRef = () => {

  const inputRef = useRef()
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.changeBg()
      
    }
  }

  return (
    <div>
        <InputChild type="text" ref={inputRef} />
        <button onClick={handleClick} > click </button>
    </div>
  )
}

export default ForwardRef