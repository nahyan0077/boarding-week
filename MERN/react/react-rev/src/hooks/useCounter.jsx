import { useState } from "react"


export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)
    return {
        incre : () => setCount(count + 1), 
        decre : () => setCount(count - 1) ,
        reset : () => setCount(0) ,
        count,
        setCount
    }
}