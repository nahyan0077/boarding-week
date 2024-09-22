import React from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { count, incre, decre, reset, setCount } = useCounter();

  if (count < 0) {
    setCount(0);
  }

  return (
    <div>
      <button>{count}</button>
      <br />
      <br />
      <button onClick={() => incre()}> + </button>
      <button onClick={() => decre()}> - </button>
      <button onClick={() => reset()}> reset </button>
    </div>
  );
};

export default Counter;
