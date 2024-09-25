import React, { useState } from "react";

const Child = ({ renderProps }) => {
  const [text, setText] = useState("");
  return (
    <>
      <h2> {renderProps(text)} </h2>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </>
  );
};

const RenderProps = () => {
  return (
    <>
    <h2> render props</h2>
        <Child renderProps={(text) => <h2> {text} </h2>  } />
    </>
  )
};

export default RenderProps;
