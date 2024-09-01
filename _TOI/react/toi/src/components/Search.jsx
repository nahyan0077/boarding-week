import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Search = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState([])

    useEffect(()=>{
         async function fetch() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

            console.log(res);
            setData(res.data)
            
        }
        fetch()
    },[])

    useEffect(()=>{
        let searchData = data.filter((dat) => dat.title.includes(search))
        setFilter(searchData)
    },[search])

  return (
    <div>
        <input type="text" className='text-white' onChange={(e)=>setSearch(e.target.value)} />
        {
            filter.map((data) =>{
                return (
                    <h2 key={data.id} > {data.title} </h2>
                )
            })
        }
    </div>
  )
}

