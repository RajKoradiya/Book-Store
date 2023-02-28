import React from "react";

function Counter() {
    const[number, setNumber] = React.useState(0);

    function add() {
        setNumber(prevNumber => prevNumber + 1)
    }
    return (
        <div>
            <p>{number}</p>
            <button onClick={add}>Increse Number</button>
        </div>
    )
}

export default Counter;