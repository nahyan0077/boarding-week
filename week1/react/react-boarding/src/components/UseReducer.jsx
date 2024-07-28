import React, { useReducer } from 'react'
import reducer from '../reducers/Reducers'



const UseReducer = () => {
    const initialState = {count : 0}
    const [state, dispatch] = useReducer(reducer, initialState)
    
  return (
    <div>
        <h2> {state.count} </h2>
        <button onClick={()=> dispatch({type: "+"})} >ADD</button>
        <button onClick={()=> dispatch({type: "-"})} >MINUS</button>
    </div>
  )
}

export default UseReducer
