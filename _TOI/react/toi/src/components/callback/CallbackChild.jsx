import React from 'react'

const CallbackChild = ({handleClick,text,value}) => {

    console.log("callback child --  ",value);
    

  return (
    <div>

        <button onClick={handleClick} > {text} </button>
    </div>
  )
}

export default React.memo(CallbackChild)