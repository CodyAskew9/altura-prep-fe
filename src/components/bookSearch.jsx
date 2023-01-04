import React, { useState } from 'react'
import  Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'




const BookSearch = () => {
    

  return (
    <div>
        <Form >
        <Form.Control type='input' placeholder='Find Book' />
        <Button variant='primary' type='submit'>Search</Button>
        </Form>
    </div>
  )
}

export default BookSearch