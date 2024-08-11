import React from 'react'

const ButtonChild = ({onClick, label}) => {
    console.log("child render",label);
    
  return (
    <button onClick={onClick} > {label} </button>
  )
}

export default React.memo( ButtonChild)