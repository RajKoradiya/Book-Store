import React from "react";
import Form from "./components/Form";
// import RegisterUser from "./components/RegisterUser";
// import Consumer1 from "./components/Consumer1";
// import PostDetails from "./components/PostDetails";
// import HooksMouse from "./components/HooksMouse";
// import Post from "./components/Post";
// import Consumer2 from "./components/Consumer2";
// import Consumer1 from "./components/Consumer1";
// import CounterHook from "./components/CounterHook";
// import UDetails from "./components/UDetails";
// import RenderPropsComponent from "./components/RenderPropsComponent";
// import { UserProvider } from "./components/UserContex";
// import Users from "./components/Users";
// import FocusInput from "./components/FocusInput";
// import UserList from "./components/UserList";
// import Home from "./pages/Home";
// import InputRef from "./components/InputRef";
// import Home from "./pages/Home";
// import About from "./pages/About.";
// import List from "./components/List";
// import LoginForm from "./components/LoginForm";

// export const UserContext = React.createContext()
// export const counterContext = React.createContext()

// const initialValue =0;
// const reducer = (state,action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialValue
//         default:
//             return state
//     }
// }


function App() {

  // const[count,dispatch] = useReducer(reducer,initialValue)
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

      {/* <UserContext.Provider value="Raj">
        <Consumer2/>
      </UserContext.Provider> */}

      {/* <Users/> */}

      {/* <Post/> */}

      {/* <HooksMouse /> */}
      {/* <PostDetails /> */}
      {/* <CounterHook/> */}
      {/* <UDetails/> */}

      {/* <counterContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
          Count - {count}
          <Consumer1/>
          <Consumer2/>
        </div>
      </counterContext.Provider> */}
      {/* <RegisterUser /> */}

      <Form/>
    </div>
  );
}

export default App;
