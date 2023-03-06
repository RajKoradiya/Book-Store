import React, { Component } from 'react'
import HOC from '../components/HOC'
// import Title from '../components/Title'
// import Counter from '../components/Counter'
import UserList from '../components/UserList'

export default class Home extends Component {

  // constructor() {
  //     super();
  //     this.state = { title: "Default Title", description: "Default Description" };
  // }

  render() {
    const userData = [
      {ID : 1, Name : 'Raj'},
      {ID : 2, Name : 'Monank'},
      {ID : 3, Name : 'Ashish'},
      {ID : 4, Name : 'Dharvi'},
      {ID : 5, Name : 'Jahnvi'}
    ]

    const Users = HOC(UserList, userData)
    return (
      // <div>
      //    <>
      //   <h1>This home page</h1>
      // <div>
      //   <Title
      //     Title1="first title"
      //     Title2="second title"
      //     Title3="third title"
      //     titlestate={this.state.title}
      //     descriptionstate={this.state.description}

      //   />
      // </div>
      // <Counter/>

      // 
      <div>
          <Users />
      </div>
    )
  }
}
