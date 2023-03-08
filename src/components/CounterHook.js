// import React from "react";

// function Counter() {
//     const[number, setNumber] = React.useState(0);

//     function add() {
//         setNumber(prevNumber => prevNumber + 1)
//     }
//     return (
//         <div>
//             <p>{number}</p>
//             <button onClick={add}>Increse Number</button>
//         </div>
//     )
// }

// export default Counter;

// <----------------------Using useReducer-------------------------->

import React, {useReducer} from 'react'
const initialValue =0;
const reducer = (state,action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialValue
        default:
            return state
    }
}
function CounterHook() {
   const[count, dispatch] = useReducer(reducer,initialValue)
  return (
    <div>
        <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterHook
