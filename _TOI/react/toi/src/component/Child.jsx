import React from 'react'

const Child = ({name}) => {
  return (
    <div>
        <h2> CHILD </h2>
        <br />
        <button> prop -- {name} </button>
        <br />
        <br />
    </div>
  )
}

export default Child