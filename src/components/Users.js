import React, { Component } from 'react'
import axios from 'axios'
import UserDetails from './UserDetails'

class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         list: []
      }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(responce => {
            console.log(responce)
            this.setState({list : responce.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
  render() {
    const { list } = this.state
    // const userdata = users.map(user => <div key={user.id}>{user.name}</div>)
    // console.log(userdata)
    return (
      <div>
        {list ? list.map(user => (<UserDetails user={user} key={user.id + user.name}/> )) : null}
        
      </div>
    )
  }
}

export default Users
