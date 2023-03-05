import React from "react";
// import Home from "./pages/Home";
// import About from "./pages/About.";
// import List from "./components/List";
import LoginForm from "./components/LoginForm";


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
      <LoginForm />
    </div>
  );
}

export default App;
