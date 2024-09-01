import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((count) =>count + 1);
  }, []);
  useEffect(() => {
    setCount((count) =>count + 1);
  }, []);
//   useEffect(() => {
//     // setCount(count + 1);
//     console.log(count," <---  count");
//     return () =>{
//         console.log("return");
//     }
//   },[count]);

  return (
    <>
      <h2> use effect </h2>

      <button onClick={()=>setCount(count + 1)} > incre </button>

      <h2> {count} </h2>
    </>
  );
};
