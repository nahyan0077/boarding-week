import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const sum = useMemo(() => {
    console.log("Calculating sum..."); // This will only log on initial render
    let total = 0;
    for (let i = 1; i <= 1000; i++) {
      total += i;
    }
    return total;
  }, []); // Empty dependency array means this calculation runs only once

//   const sum = () => {
//     console.log("Calculating sum..."); // This will log on every render
//     let total = 0;
//     for (let i = 1; i <= 1000; i++) {
//       total += i;
//     }
//     return total;
//   };


  return (
    <div>
      <h3>With useMemo</h3>
      <p>Sum of numbers from 1 to 1000: {sum}</p>
      {/* <p>Sum of numbers from 1 to 1000: {sum()}</p> */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count (Re-renders Component)
      </button>
    </div>
  );
};
export default UseMemo