import React, { useState } from 'react'

const Dropdown = () => {

    const [category, setCategory] = useState('')
    const [item, setItem] = useState('')

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


      const handleClick = (e) => {
        console.log(e.target.value);
        setCategory(e.target.value)
      }
      

  return (
    <div>
        <select name="" id="" onChange={handleClick} >
            {
                data.map((ele, index) => {
                    return (
                        
                        <option value={ele['category']} key={index}  > {ele['category']} </option>
                    )
                })

            }
        </select>

        <select name="" id="" hidden={!category} onChange={(e)=>setItem(e.target.value)} >

            {
                category.length &&
                data.find(ele => ele['category'] == category)['items'].map((ele,index)=> {
                    return (
                        <option value={ele} key={index} > {ele} </option>
                    )
                })
            }
        </select>

            <br />
            <br />

        <h1> {item} </h1>

    </div>
  )
}

export default Dropdown