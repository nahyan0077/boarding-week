import { useState } from 'react'
import './App.css'
import Debounce from './components/Debounce'
import Counter from './components/Counter'
import UseMemo from './components/UseMemo'
import Dropdown from './components/Dropdown'
import ForwardRef from './components/ForwardRef'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorBoundary1 from './components/ErrorBoundary1'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      {/* <Debounce /> */}
      {/* <Counter /> */}
      {/* <UseMemo /> */}
      <ErrorBoundary1 >
        <Dropdown />
      </ErrorBoundary1>

      {/* <ErrorBoundary>
        <ForwardRef />

      </ErrorBoundary> */}
    </>
  )
}

export default App
