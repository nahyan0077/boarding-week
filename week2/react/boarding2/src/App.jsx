import { lazy, Suspense } from 'react'
import './App.css'
// import Counter from './component/counter'
const Lazy1 = lazy(() => import ('./component/counter'))


function App() {


  return (
    <>
    <Suspense fallback={"loading....."} >
      <Lazy1 />
      {/* <Counter /> */}
    </Suspense>
    </>
  )
}

export default App
