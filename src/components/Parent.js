import React, { useState } from "react";
// import Child from "./Child";

function Parent({children}) {
  const [parentCount, setParentCount] = useState(0);

  const handleClick = () => {
    setParentCount(parentCount + 1);
};
console.log("prenet render")

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Render count: {parentCount}</p>
      <button onClick={handleClick}>Increment Parent Count</button>
      {children}
    </div>
  );
}

export default Parent;

