import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { UseEffect } from "./components/useEffect";
import Timer from "./components/Timer";
import Interval from "./components/Interval";
import { Search } from "./components/search";
import Test from "./components/Test";
import TestHoc1 from "./components/TestHoc1";
import MyComponet from "./components/Classes";
import Dropdown from "./components/Dropdown";
import TestHoc21 from "./components/TestHoc21";
import Callback from "./components/callback/Callback";
import  UseMemo  from "./components/useMemo/useMemo";
import UseMemo1 from "./components/useMemo/UseMemo1";


function App() {


  return (
    <>
      {/* <UseEffect /> */}
      {/* <Timer /> */}
      {/* <Interval /> */}
      {/* <Search /> */}
      {/* <Test /> */}
      {/* <TestHoc1 /> */}
      {/* <MyComponet /> */}
      {/* <Dropdown /> */}
      {/* <TestHoc21 /> */}
      {/* <Callback /> */}
      {/* <UseMemo /> */}
      <UseMemo1 />
    </>
  );
}

export default App;
