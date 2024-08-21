import React from 'react'

const Hoc2 = (Wrapper) => {
  return function (props){
    return <Wrapper {...props} />
  }
}

export default Hoc2