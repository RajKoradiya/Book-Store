// import React, { Component } from 'react'

// class UserDetails extends Component {
//   render() {
//     // const {userdata} = this.props.user
//     return (
//       <div>
//         {this.props.user.name}
//         {/* <div>{user.name}</div> */}
//       </div>
//     )
//   }
// }

// export default UserDetails

import React from 'react'

function UserDetails({user}) {
  return (
    <div>
      {user.id}.
      {user.name}
    </div>
  )
}

export default React.memo(UserDetails)