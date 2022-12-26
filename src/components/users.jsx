import axios from 'axios'
import React from 'react'


 const [users, setUsers] = useState([])

axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => {
    setUsers(res.data)
})

const users = () => {
    users.map(user)
  return (
    <div>users</div>
  )
}

export default users