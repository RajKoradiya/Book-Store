import React, { Component } from 'react'
import Title from '../components/Title'
import Counter from '../components/Counter'

export default class Home extends Component {
    
    constructor() {
        super();
        this.state = { title: "Default Title", description: "Default Description" };
    }

  render() {
    return (
      <div>
         <>
        <h1>This home page</h1>
      <div>
        <Title
          Title1="first title"
          Title2="second title"
          Title3="third title"
          titlestate={this.state.title}
          descriptionstate={this.state.description}
          
        />
      </div>
      <Counter/>
      
      </>
      </div>
    )
  }
}
