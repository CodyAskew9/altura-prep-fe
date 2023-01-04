import React from 'react'
import  Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const adminLogin = () => {
  return (
    <Form>
    
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>Username</Form.Label>
    <Form.Control type='text' placeholder='Username' />
</Form.Group>
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>password</Form.Label>
    <Form.Control type='password' placeholder='password' />
</Form.Group>
<Button variant='primary' type='submit'>Submit</Button>
    </Form>
  )
}

export default adminLogin