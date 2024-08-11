import React, { useState } from "react";

const RenderPropsChild = ({ render }) => {
  const [name, setName] = useState("Some fetched data");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h3> Child </h3>
      <div>
        <input type="text" onChange={handleChange} />
        {render(name)}
      </div>
    </div>
  );
};

const RenderProps = () => {
  return (
    <div>
      <h3> RenderProps </h3>
      <RenderPropsChild render={(name) => <p> hello {name} </p>} />
    </div>
  );
};

export default RenderProps;
