import React, { useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";
import Child3 from "./Child3";


function Parent({ children }) {
    const [parentCount, setParentCount] = useState(0);
    const [name, setName] = useState('Raj')

    const handleClick = () => {
        setParentCount(parentCount + 1);
    };
    console.log("prenet render")

    return (
        <div>
            <h2>Parent Component</h2>
            <p>Render count: {parentCount}</p>
            <button onClick={handleClick}>Increment Parent Count</button>
            <div>
                <button onClick={() => setName('Raju')}>change name</button>
            </div>
            <Child/>
            <Child2 name = {name}/>
            <Child3/>
        </div>
    );
}

export default Parent;

