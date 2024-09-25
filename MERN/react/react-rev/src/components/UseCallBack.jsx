import React, { useCallback, useState } from "react";

const Child = React.memo(({ number, handleClick, count }) => {
  console.log("child");

  return (
    <>
      <h2> {count} </h2>
      <br />
      <br />
      <button onClick={handleClick}> add {number} </button>
    </>
  );
});
const Child1 = React.memo(({ number, handleClick, count }) => {
  console.log("child1");

  return (
    <>
      <h2> {count} </h2>
      <br />
      <br />
      <button onClick={handleClick}> add {number} </button>
    </>
  );
});
const UseCallBack = () => {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  const handleClick = useCallback(() => {
    console.log("callback ");

    setCount(count + 1);
  }, [count]);
  const handleClick1 = useCallback(() => {
    console.log("callback 1");

    setCount1(count1 + 1);
  }, [count1]);

  return (
    <div>
      <Child handleClick={handleClick} number={1} count={count} />
      <Child1 handleClick={handleClick1} number={2} count={count1} />
    </div>
  );
};

export default UseCallBack;
