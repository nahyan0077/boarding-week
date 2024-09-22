import { useState } from 'react'
import './App.css'
import Debounce from './components/Debounce'
import Counter from './components/Counter'
import UseMemo from './components/UseMemo'
import Dropdown from './components/Dropdown'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      {/* <Debounce /> */}
      {/* <Counter /> */}
      {/* <UseMemo /> */}
      <Dropdown />
    </>
  )
}

export default App
