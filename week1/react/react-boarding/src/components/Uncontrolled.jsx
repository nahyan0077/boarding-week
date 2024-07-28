import React, { useRef } from "react";

const Uncontrolled = () => {
  const textRef = useRef(null);
  const handle = () => {
    console.log(textRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={textRef} />
      <button onClick={handle}></button>
    </div>
  );
};

export default Uncontrolled;
