import React from "react";
// import Consumer3 from "./components/Consumer3";
// import RenderPropsComponent from "./components/RenderPropsComponent";
// import { UserProvider } from "./components/UserContex";
import Users from "./components/Users";
// import FocusInput from "./components/FocusInput";
// import UserList from "./components/UserList";
// import Home from "./pages/Home";
// import InputRef from "./components/InputRef";
// import Home from "./pages/Home";
// import About from "./pages/About.";
// import List from "./components/List";
// import LoginForm from "./components/LoginForm";


function App() {
  // const [currentpage, setCurrentpage] = React.useState("Home")

  // const handleChange = () => {
  //   if (currentpage === "Home") {
  //     setCurrentpage("About")
  //   }
  //   else
  //   {
  //     setCurrentpage("Home")
  //   }
  // }


  return (
    <div>
      {/* {currentpage === "Home" ? <Home /> : <About />}
      <button onClick={handleChange}>Change Page</button> */}
      {/* <List /> */}
      {/* <LoginForm /> */}
      {/* <Title /> */}
      {/* <FocusInput /> */}
      {/* <UserList /> */}
      {/* <Home /> */}
      {/* <RenderPropsComponent render = {() => {
        return(
          <h3>I am coming from Render Props</h3>
        )
      }} /> */}

      {/* <UserProvider value="Raj">
        <Consumer3/>
      </UserProvider> */}

      <Users/>
    </div>
  );
}

export default App;
