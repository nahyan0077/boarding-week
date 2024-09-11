import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LoadMore = () => {

    const [users, setUsers] = useState([])

    async function fetchUser() {
        const res = await axios.get('https://randomuser.me/api/?results=10')
        console.log(res.data);
        setUsers((data) => [...data, ...res.data.results])
    }


    const handleLoadMore = () => {
        fetchUser()
    }

  return (
    <div>
        <h2> hello </h2>
        <ul>
            {
                users.map((data) => {
                    return (

                        <li> {data.name.first} </li>
                    )
                })

            }

        </ul>

        <button onClick={handleLoadMore} > loadMore </button>
    </div>
  )
}

export default LoadMore