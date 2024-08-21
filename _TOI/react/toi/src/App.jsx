import { useContext } from 'react'
import './App.css'
import './index.css'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './component/Home.jsx';
import { ThemeContext } from './context/ThemeContext.jsx';
import Hoc from './component/Hoc.jsx';
import Name from './component/Name.jsx';
import Hoc2 from './component/Hoc2.jsx';
import Counter from './component/Counter.jsx';


const EnhancedHome = Hoc(Home)
const EnhancedName = Hoc2(Name)

function App() {

  const {theme, setTheme} = useContext(ThemeContext)

  console.log(theme);
  

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<EnhancedHome name="nahyan" /> } />
          <Route path='/home' element={<EnhancedName name="nahyan" /> } />
          <Route path='/counter' element={<Counter /> } />
        </Routes>
      </Router>

    </>
  )
}

export default App
