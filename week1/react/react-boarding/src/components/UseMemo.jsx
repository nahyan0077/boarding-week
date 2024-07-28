import React, { useMemo, useState } from 'react';

const UseMemo = () => {
  const [count1, setCount1] = useState(5);
  const [count2, setCount2] = useState(50);

  const click1 = () => {
    setCount1(count1 + 1);
  };

  const click2 = () => {
    setCount2(count2 + 1);
  };

  const isCount2Even = useMemo( () => {
    let i = 0;
    while (i < 230000000) i++;
    return count2 % 2 === 0;
  },[count2]);



  return (
    <>
      <h1>UseMemo</h1>
      {isCount2Even && <p>Count2 is even</p> }
      <button onClick={click1}>{count1} Click 1</button>
      <button onClick={click2}>{count2} Click 2</button>
    </>
  );
};

export default UseMemo;