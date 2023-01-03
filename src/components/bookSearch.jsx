import React, { useState } from 'react'
import  Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Books from './books'



const BookSearch = () => {
    const [search, setSearch]= useState("");
    const [books, setBooks] = useState([])
    
    const searchBook = (event) =>{
        axios.get("https://www.googleapis.com/books/v1/volumes?q=:"+search+":keyes&key=AIzaSyBMzZS3hTqxyJMIFq0cxpTCJ8kOp3Y4Qbw")
        .then(res=> setBooks(res.data.items))
        .catch(err=> console.log(err))
        event.preventDefault()
       }
    

  return (
    <div>
        <Form onSubmit={searchBook}>
        <Form.Control type='input'value={search} onChange={e=>setSearch(e.target.value)} placeholder='Find Book' />
        <Button variant='primary' type='submit'>Search</Button>
        </Form>
<Books book= {books} />
    </div>
  )
}

export default BookSearch