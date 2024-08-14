
import './App.css'
import RenderProps from './component/RenderProps'
import ErrorBoundary from './errorBoundary/ErrorBoundary'
// import CallBack from './component/CallBack'

// import Home from './component/Home'

function App() {


  return (
    <>
      {/* <Home /> */}
      {/* <CallBack /> */}
      <ErrorBoundary>
      <RenderProps />

      </ErrorBoundary>
    </>
  )
}

export default App
