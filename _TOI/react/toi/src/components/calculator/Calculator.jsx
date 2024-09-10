import React, { useState } from 'react'

const Calculator = () => {

    const [str, setStr] = useState('')
    const [res, setRes] = useState('')

    const handleClick = (e) => {
        setStr((s) => s + e.target.innerText)
    }

    const result = () => {
        setRes(eval(str))
    }
    const clear = () => {
        setStr('')
        setRes('')
    }

  return (
    <div>
        <h2> Calculator </h2>
        { !res ? <button> {str} </button>: <button> {res} </button> }
        <div style={{display: "flex", gap: "10px",justifyContent:'center',textAlign:'center'}} >
            <button onClick={handleClick} >7</button>
            <button onClick={handleClick}>8</button>
            <button onClick={handleClick}>9</button>
            <button onClick={handleClick}>+</button>
        </div>
        <div style={{display: "flex", gap: "10px",justifyContent:'center',textAlign:'center'}} >
            <button onClick={handleClick}>4</button>
            <button onClick={handleClick}>5</button>
            <button onClick={handleClick}>6</button>
            <button onClick={handleClick}>-</button>
        </div>
        <div style={{display: "flex", gap: "10px",justifyContent:'center',textAlign:'center'}} >
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick}>*</button>
        </div>
            <button onClick={result}>=</button>
            <button onClick={clear}>C</button>
    </div>
  )
}

export default Calculator