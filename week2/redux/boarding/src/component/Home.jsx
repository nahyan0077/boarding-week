import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus, win } from "../redux/slice";
import { start} from '../redux/autoSlice'

const Home = () => {
  const data = useSelector((state) => state.count);
  const data1 = useSelector((state) => state.runner);

  console.log(data1.run);
  


  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handlePlus = () => {
    dispatch(plus());
  };

  const handleMinus = () => {
    dispatch(minus());
  };

  const handleWin = () => {
    dispatch(win(text));
  };

  const handeStart = () => {
    dispatch(start())
  }

  return (
    <div>
      <h2> Home</h2>
      <button> {} </button>
      <button>{data.count}</button>
      <br />
      <br />
      <button onClick={handlePlus}> + </button>
      <button onClick={handleMinus}> - </button>
      <br />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleWin}> 100 </button>
        <br />
        <br />

        <button onClick={handeStart} > start </button>


    </div>
  );
};

export default Home;
