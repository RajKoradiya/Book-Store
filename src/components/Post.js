import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         title: '',
         body: '',
         userid: ''
      }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)

        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(responce => {
            console.log(responce)
        })
        .catch(error => {
            console.log(error)
        })
    }
  render() {
    const {title, body, userid} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
            </div>
            <div>
                <input type="text" name="userid" value={userid} onChange={this.changeHandler}></input>
            </div>
            <button type = "submit">submit</button>
        </form>
      </div>
    )
  }
}

export default Post

