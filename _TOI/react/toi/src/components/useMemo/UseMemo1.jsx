import React, { useMemo, useState } from 'react'

const UseMemo1 = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const exp = useMemo(() => {
        let res = 1
        for(let i = 1; i < 100000000; i++){
            res += i
        }
        return res + count2
    },[count2])


  return (
    <div>
        <button> {count1} </button>
        <br />
        <br />
        <button onClick={()=>setCount1(count1 + 1)} > add1 </button>
        <br />
        <br />
        {/* <button> {exp()} </button> */}
        <button> {exp} </button>
        <br />
        <br />

        <button onClick={()=>setCount2(count2 + 1)} > add2 </button>

    </div>
  )
}

export default UseMemo1