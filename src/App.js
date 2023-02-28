import React from "react";
import Home from "./pages/Home";
import About from "./pages/About.";


function App() {
  const [currentpage, setCurrentpage] = React.useState("Home")

  const handleChange = () => {
    if (currentpage === "Home") {
      setCurrentpage("About")
    }
    else
    {
      setCurrentpage("Home")
    }
  }


  return (
    <div>
      {currentpage === "Home" ? <Home /> : <About />}
      <button onClick={handleChange}>Change Page</button>
    </div>
  );
}

export default App;
