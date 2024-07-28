import React, { useContext } from 'react'
import { CheckContext } from '../context/CheckContext'



function InProvider() {   
    const {name, setName} = useContext( CheckContext )
  return (
    <div>
      {name}
    </div>
  )
}

export default InProvider
