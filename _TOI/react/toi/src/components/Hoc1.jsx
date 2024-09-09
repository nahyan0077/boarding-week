import React from 'react'

export const Hoc1 = (Wrapper) => {
  return function ({isLoading, ...props}) {
    if (isLoading) {
        return <h2> Loading.... </h2>
    }
    return <Wrapper {...props} />
  }
}

export default Hoc1
