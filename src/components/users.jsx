import axios from 'axios'
import React, { useState, useEffect } from 'react'
import BookSearch from './bookSearch'
import Card from 'react-bootstrap/Card'


const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => 
    setData(res.data))
    
  }, [])
  console.log(data)
  
  return (
    <>
				<Card key={data.id} className="mb-2">
					<Card.Body>
						<Card.Title>Hello, {data.name}!</Card.Title>
            <BookSearch />
					</Card.Body>
				</Card>
		</>
  )
}

export default Users