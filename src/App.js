import React from "react";
import RenderPropsComponent from "./components/RenderPropsComponent";
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
      <RenderPropsComponent render = {() => {
        return(
          <h3>I am coming from Render Props</h3>
        )
      }} />
    </div>
  );
}

export default App;
