import React, { useState } from "react";

const Child = React.memo((props) => {
  console.log("child rerneder");
  return (
    <>
      <div>Child</div>
      <h2> {props.count} </h2>
    </>
  );
});

export const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        {" "}
        Add{" "}
      </button>
      <Child count={count} />
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};
