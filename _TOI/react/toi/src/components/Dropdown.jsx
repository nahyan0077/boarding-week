import React, { useState } from 'react'

const Dropdown = () => {


const data = [
    {
        category: "Fruits",
        items: ["Apple", "Banana", "Orange", "Grapes"],
    },
    {
        category: "Vegetables",
        items: ["Carrot", "Broccoli", "Lettuce", "Tomato"],
    },
    ];

    const [type, setType] = useState([])

    
    const handleChange = (e) => {
        if(e.target.value == "fruit"){
            setType(data[0].items)
        }else{
            setType(data[1].items)
        }
    }

    
  return (
    <div>
        <select name="" id="" onChange={handleChange} >
            <option value="fruit">Fruits</option>
            <option value="vegetables">Vegetables</option>
        </select>

        <select name="" id="">
            {
                type.map((ele, index) =>{
                    return(
                        <option value="" key={index} > {ele} </option>
                    )
                })
            }
        </select>

    </div>
  )
}

export default Dropdown