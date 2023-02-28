// import React from "react";
// import Home from "./pages/Home";
// import About from "./pages/About.";


// function App() {
//   const [currentpage, setCurrentpage] = React.useState("Home")

//   const handleChange = () => {
//     if (currentpage === "Home") {
//       setCurrentpage("About")
//     }
//     else
//     {
//       setCurrentpage("Home")
//     }
//   }


//   return (
//     <div>
//       {currentpage === "Home" ? <Home /> : <About />}
//       <button onClick={handleChange}>Change Page</button>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Home from "./pages/Home";
import About from "./pages/About.";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHome: false,
      isAbout: false
    }

    this.handlechangeHome = this.handlechangeHome.bind(this)
    this.handlechangeAbout = this.handlechangeAbout.bind(this)
  }

  handlechangeHome() {
    this.setState({
      isHome: true
    })
  }

  handlechangeAbout() {
    this.setState({
      isAbout: true
    })
  }
  render() {
    return this.state.isHome ? (<Home />) : this.state.isAbout ? (<About />) :
      (
        <div>
          <button onClick={this.handlechangeHome}> Home </button>
          <button onClick={this.handlechangeAbout}> About</button>
        </div>
      )
  }
}

