import React, { useState } from "react";


function Child3() {
  const [childCount, setChildCount] = useState(0);

  const handleClick = () => {
    setChildCount(childCount + 1);
};
console.log("child3 render")

  return (
    <div>
      <h2>Child3 Component</h2>
      <p>Render count: {childCount}</p>
      <button onClick={handleClick}>Increment Child3 Count</button>
    </div>
  );
}

export default React.memo(Child3);
