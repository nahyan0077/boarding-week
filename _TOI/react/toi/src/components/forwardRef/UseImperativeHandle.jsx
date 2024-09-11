import React, { forwardRef, useImperativeHandle, useRef } from 'react'


const Child = forwardRef((props, ref) => {

    const inputRef = useRef()

    const changeBackground = () => {
        inputRef.current.style.backgroundColor = 'green'
    }
    const changeColor = () => {
        inputRef.current.style.color = 'black'
    }

    useImperativeHandle(ref, () => ({
        changeBackground,
        changeColor
      }));

    return (
        <>
            <input type="text" {...props} ref={inputRef}  />
        </>
    )
})


const UseImperativeHandle = () => {

    const inputRef = useRef()

    const handleChange = () => {
        if (inputRef.current) {
            inputRef.current.changeBackground()
        }
    }

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.changeColor()
        }
    }

  return (
    <div>
        <Child ref={inputRef} placeholder={"useImperativeHandle"} onChange={handleChange} />
        <button onClick={handleClick} > color </button>
    </div>
  )
}

export default UseImperativeHandle