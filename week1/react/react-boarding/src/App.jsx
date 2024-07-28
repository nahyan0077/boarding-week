
import "./App.css";
// import { Counter } from "./components/Counter";
import InProvider from "./components/InProvider";
import { Parent } from "./components/ReactMemo";
import Uncontrolled from "./components/Uncontrolled";
import UseCallback from "./components/UseCallback";
import UseEffect from "./components/UseEffect";
import Problem1 from "./components/Problem1";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import UseRefExample from "./components/UseRefExample";
import UseMemo from "./components/UseMemo";
import { LayoutEffect } from "./components/LayoutEffect";
import { InsertionEffect } from "./components/InsertionEffect";
// import { lazy, Suspense, useState } from "react";
// const Lazy1 = lazy(() => import('./components/Counter'))
// const Lazy2 = lazy(() => import('./components/UseEffect'))


function App() {

  // const [showComponent1, setShowComponent1] = useState(false);
  // const [showComponent2, setShowComponent2] = useState(false);

  return (
    <>
      {/* <Counter /> */}
      {/* <UseRef /> */}
      {/* <UseRefExample /> */}
      {/* <UseReducer /> */}
      {/* <InProvider /> */}
      {/* <Uncontrolled /> */}
      {/* <UseEffect /> */}
      {/* <Parent /> */}
      {/* <UseCallback /> */}
      {/* <Problem1 /> */}
      {/* <UseMemo /> */}
      {/* <LayoutEffect /> */}
      <InsertionEffect />

      {/* <button onClick={() => setShowComponent1(true)}>Load Component 1</button>
      <button onClick={() => setShowComponent2(true)}>Load Component 2</button>

      <Suspense  fallback={ <div> Loading..... </div> } >
        {showComponent1 && <Lazy1/> }
        {showComponent2 && <Lazy2/>  }
      </Suspense> */}

    </>
  );
}

export default App;
