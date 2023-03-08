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
import Consumer3 from './Consumer3'
import { UserContext } from '../App'
function Consumer2() {
  const user = useContext(UserContext)
  return (
    <div>
      Hello, {user}
    </div>
  )
}

export default Consumer2
