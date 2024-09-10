import React, { useState } from 'react'

const SearchSugg = () => {
    const data = [
        'Apple',
        'Banana',
        'Orange',
        'Mango',
        'Pineapple',
        'Grapes',
        'Strawberry',
        'Watermelon',
        'Blueberry',
        'Cherry',
      ];
    const [query, setQuery] = useState('')
    const [sugg, setSugg] = useState([])

    const handleChange = (e) => {
        setQuery(e.target.value)
        let quer = e.target.value
        console.log(quer);
        
        let res = data.filter((ele) => ele.toLocaleLowerCase().includes(quer))
        console.log(res);
        
        setSugg(res)
    }

  return (
    <div>
        <input type="text" placeholder='search....' onChange={ handleChange} />
        { sugg.length  && query &&
            sugg.map((ele) =>{
                return (

                <ul>
                    <li> {ele} </li>
                </ul>
                )
            })
        }
    </div>
  )
}

export default SearchSugg