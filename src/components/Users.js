import React from 'react'
// import axios from 'axios'
import UserDetails from './UserDetails'

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


export default function Users(props) {
  const [list, setList] = React.useState(null);

  React.useEffect(() => {
    const fetchdata = async() => {
      const responce = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await responce.json()
      console.log(data)
      setList(data)
    }
    fetchdata()
  },[])
  return (
    <div>
      {list ? list.map(user => (<UserDetails user={user} key={user.id + user.name}/> )) : null}
    </div>
  )
}

