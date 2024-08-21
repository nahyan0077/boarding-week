import React from 'react'

const Hoc = (Wrapper) => {
  return function updatedComponent (props){
    console.log("props");
    return <Wrapper {...props} />    
  }
}

export default Hoc