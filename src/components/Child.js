import React, { useState } from "react";


function Child() {
  const [childCount, setChildCount] = useState(0);

  const handleClick = () => {
    setChildCount(childCount + 1);
};
console.log("child render")

  return (
    <div>
      <h2>Child Component</h2>
      <p>Render count: {childCount}</p>
      <button onClick={handleClick}>Increment Child Count</button>

    </div>
  );
}

export default React.memo(Child);
