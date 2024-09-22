import React, { useEffect, useState } from 'react'

const Debounce = () => {

    const [search, setSearch] = useState('')
    const [debSearch, setDebSearch] = useState('')

    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebSearch(search)
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    },[search])

    useEffect(()=>{
        console.log("API call triggered...");
        
    },[debSearch])

    const handleChange = (e) => {

        setSearch(e.target.value)
    }


  return (
    <div>
        <h2> {debSearch} </h2>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default Debounce