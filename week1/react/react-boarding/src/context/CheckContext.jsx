// import {  Children, createContext, useState } from "react";


// export const CheckContext = createContext()

// export const MyProvider = ({children}) => {
//     const [name, setName] = useState("nahyan")
//     return (
//         <CheckContext.Provider value={{name, setName}} >
//             {children}
//         </CheckContext.Provider>
//     )
// }


import {Children, createContext, useState} from 'react'

export const CheckContext = createContext()

export const MyProvider = ({Children}) => {
    const [count, setCount] = useState(0)

    return (
        <CheckContext.Provider value={{count, setCount}} >
            {Children}
        </CheckContext.Provider>
    )

}

