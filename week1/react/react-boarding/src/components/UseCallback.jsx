import React, { useCallback, useState } from "react";

const Button = React.memo(({handleClick,children}) => {
    console.log("child rendering", children);
  return (
    <div>
      <h2>Button</h2>
      <button onClick={handleClick} > {children} </button>
    </div>
  );
});

const UseCallback = () => {
    const [show1 , setShow1] = useState(false)
    const [show2 , setShow2] = useState(false)
    const click1 = () => {
        setShow1(!show1)
    }
    const click2 = useCallback( () => {
        setShow2(!show2)
    },[show2])
    console.log("parent rendering");
  return (
    <div>
      {show1 && <h2>UseCallback11</h2>}
      <Button handleClick={click1} > click 1 </Button>
      {show2 && <h2>UseCallback22</h2>}
      <Button handleClick={click2} > click 2 </Button>
    </div>
  );
};

export default UseCallback;
