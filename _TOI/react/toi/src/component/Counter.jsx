import React from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import { decre, incre } from '../redux/slices/CounterSlice'

const Counter = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.count)

    console.log(data);
    

  return (
    <div>
        <h2> counter </h2>
        <button> --hee-- {data.count} --hoo--  </button>
        <br />
        <br />
        <button onClick={()=> dispatch(incre())} > + </button>
        <button onClick={()=> dispatch(decre())} > - </button>
    </div>
  )
}

export default Counter