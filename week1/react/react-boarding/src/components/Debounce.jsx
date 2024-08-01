import React, { useEffect, useState } from "react";

const Debounce = () => {
    const [text, setText] = useState('')
    const [debounceText, setDebounceText] = useState('')

  useEffect(()=>{
    const timer = setTimeout(() => {
      setDebounceText(text)
    }, 1000);
    return() =>{
      clearTimeout(timer)
    }
  },[text])

    const handleChange = (e) =>{

        setText(e.target.value)
    }

  return (
    <div>
      <h2>Debounce</h2>
      <h3> {text} </h3>
      <h3> deb: {debounceText} </h3>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Debounce;
