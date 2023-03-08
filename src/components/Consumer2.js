// import React, { Component } from 'react'
// import Consumer3 from './Consumer3'
// class Consumer2 extends Component {
//   render() {
//     return (
//       <div>
//         <Consumer3 />
//       </div>
//     )
//   }
// }

// export default Consumer2

import React, {useContext} from 'react'
// import Consumer3 from './Consumer3'
import { counterContext } from '../App'
function Consumer2() {
  const counter = useContext(counterContext)
  return (
    <div>
      Consumer2 - {counterContext.countState}
      <button onClick={() => counter.countDispatch('increment')}>Increment</button>
      <button onClick={() => counter.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => counter.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default Consumer2
