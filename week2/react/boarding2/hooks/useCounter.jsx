import {useState} from 'react'

function useCounter(intitalValue = 0) {
    const [counter, setCount] = useState(intitalValue)

    const increment = () => setCount( (cnt) => cnt + 1)
    const decrement = () => setCount( (cnt) => cnt - 1)
    const reset = () => setCount(intitalValue)

    return {increment, decrement, reset, counter}

}

export default useCounter