import React, { Component } from 'react'

class UserDetails extends Component {
  render() {
    // const {userdata} = this.props.user
    return (
      <div>
        {this.props.user.name}
        {/* <div>{user.name}</div> */}
      </div>
    )
  }
}

export default UserDetails
