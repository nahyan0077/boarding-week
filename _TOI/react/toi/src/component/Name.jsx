import React from 'react'
import { useCount } from '../hooks/useCount'
import Child from './Child'

const Name = ({name}) => {

    const {increment, decrement, reset, count} = useCount(1)

  return (
    <div className='' >
        {name}
        <br />
        <br />

        <button> {count} </button>
        <br />
        <br />

        <Child name={count} />

        <button onClick={increment} > + </button>
        <button onClick={decrement} > - </button>
        <button onClick={reset} > reset </button>
    </div>
  )
}

export default Name