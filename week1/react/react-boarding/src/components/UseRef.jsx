import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const textRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          if (textRef.current) {
            textRef.current.style.color = "green";
          }
        }}>
        add
      </button>
      <h2 ref={textRef}> nahyan </h2>
    </div>
  );
};

export default UseRef;
