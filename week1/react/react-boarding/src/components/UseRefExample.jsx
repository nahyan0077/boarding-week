import React, { useRef } from "react";

const RefExample = () => {
  const renderCount = useRef(10);

  return (
    <div>
      <button
        onClick={() => {
          renderCount.current = renderCount.current + 1;
        }}>
        Increment
      </button>
      <p>Render Count: {renderCount.current}</p>
    </div>
  );
};

export default RefExample;
