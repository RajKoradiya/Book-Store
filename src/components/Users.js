import React, {useEffect, useReducer} from 'react'
import axios from 'axios'
// import UserDetails from './UserDetails'

// class Users extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          list: []
//       }
//     }

//     componentDidMount() {
//         axios.get("https://jsonplaceholder.typicode.com/users")
// .then(responce => {
//     console.log(responce)
//     this.setState({list : responce.data})
// })
//         .catch(error => {
//             console.log(error)
//         })
//     }

//   render() {
//     const { list } = this.state
//     return (
//       <div>
//         {list ? list.map(user => (<UserDetails user={user} key={user.id + user.name}/> )) : null}

//       </div>
//     )
//   }
// }

// export default Users

const initialValue = {
  loading: true,
  error : '',
  post : {}
}

const reducer = (state,action)=> {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        post: action.payload
      }
    case 'FETCH_ERROR':
      return{
        loading: false,
        error: "Somthing Wrong!",
        post: {}
      }
    default:
      return state 
  }
}
export default function Users(props) {
  // const [list, setList] = React.useState(null);
  const [state, dispatch] = useReducer(reducer,initialValue)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then(res => {
      dispatch({type: "FETCH_SUCCESS", payload: res.data})
    })
    .catch(err => {
      dispatch({type: "FETCH_ERROR"})
    })
  },[])

  // React.useEffect(() => {
  //   const fetchdata = async() => {
  //     const responce = await fetch("https://jsonplaceholder.typicode.com/users")
  //     const data = await responce.json()
  //     console.log(data)
  //     setList(data)
  //   }
  //   fetchdata()
  // },[])

  return (
    <div>
      {/* {list ? list.map(user => (<UserDetails user={user} key={user.id + user.name}/> )) : null} */}
      {state.loading ? 'Loading' : state.post.username}
      {state.error ? state.error : null}
    </div>
  )
}

