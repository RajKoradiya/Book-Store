// import React, { Component } from 'react'
// import Consumer2 from './Consumer2'

// class Consumer1 extends Component {
//   render() {
//     return (
//       <div>
//         <Consumer2 />
//       </div>
//     )
//   }
// }

// export default Consumer1

import React, {useContext} from 'react'
import { counterContext } from '../App'

function Consumer1() {
  const counter = useContext(counterContext)
  return (
    <div>
      Consumer1 - {counterContext.countState}
      <button onClick={() => counter.countDispatch('increment')}>Increment</button>
      <button onClick={() => counter.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => counter.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default Consumer1

