import React, { useState } from "react";


function Child2({name}) {
  const [childCount, setChildCount] = useState(0);

  const handleClick = () => {
    setChildCount(childCount + 1);
};
console.log("child2 render")

  return (
    <div>
      <h2>Child2 Component</h2>
      <p>Render count: {childCount}</p>
      <button onClick={handleClick}>Increment Child2 Count</button>
      <div>Hello {name}</div>
    </div>
  );
}

export default React.memo(Child2);
