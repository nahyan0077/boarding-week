import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = ({name}) => {

    const {theme, setTheme} = useContext(ThemeContext)

    console.log(theme);
    

  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-black'} `} >
        <br />
        {name}
        <br />
        <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')} > change theme </button>
    </div>
  )
}

export default Home