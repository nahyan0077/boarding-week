
import { useState } from 'react'
import './App.css'
import './index.css'


function App() {

  let [char, setChar] = useState("")
  const handleClick = (c) =>{
    if (char.includes(c)) {
      char = char.replace(" " +c, "" )
      console.log(char)
      let x = c + " " + char + " " 
      setChar(x)
    }else{
      setChar((prev) => prev + " " + c)

    }
    
  }

  return (
    <>
  

        <button onClick={()=>handleClick("a")} > a </button>
        <button onClick={()=>handleClick("b")} > b </button>
        <button onClick={()=>handleClick("c")} > c </button>
        <button onClick={()=>handleClick("d")} > d </button>

        <br />
        <br />

      {char &&
        <h2> {char}  </h2>
      }
    </>
  )
}

export default App
