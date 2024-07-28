import React, { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("cleared");
    };
  }, []);

  return (
    <div>
      <button >UseEffect</button>
    </div>
  );
};

export default UseEffect;
