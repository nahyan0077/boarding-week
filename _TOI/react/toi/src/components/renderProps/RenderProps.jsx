import React, { useState } from 'react'


const Child = ({sender}) => {

    const [text, setText] = useState('')

    return (
        <>
        <input type="text" onChange={ (e) => setText(e.target.value)} />
        <h2>
            {sender(text)}
        </h2>
        </>
    )
}

const RenderProps = () => {

  return (
    <div>
        <h2> Render props </h2>
        <Child sender={(name) => <p> {name} </p> } />
    </div>
  )
}

export default RenderProps