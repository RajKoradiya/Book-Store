import React, { useEffect } from 'react'
import axios from 'axios'

function PostDetails() {
    const[post,setPost] = React.useState({})
    const[id, setId] = React.useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

  return (
    <div>
      <input type="number" value={id} onChange={e => setId(e.target.value)}></input>
      <div>{post.title}</div>
    </div>
  )
}

export default PostDetails
