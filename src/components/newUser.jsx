import React from 'react'
import  Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



const NewUser = () => {
  return (
    <Form>
    
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>Name</Form.Label>
    <Form.Control type='text' placeholder='Name' />
</Form.Group>
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>ISBN</Form.Label>
    <Form.Control type='text' placeholder='ISBN' />
</Form.Group>
<Button variant='primary' type='submit'>Submit</Button>
    </Form>
  )
}

export default NewUser