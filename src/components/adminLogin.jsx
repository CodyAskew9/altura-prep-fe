import React from 'react'
import  Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './adminLogin.css'


const AdminLogin = () => {
  return (
    <div className='container'>
        <div className='background'>
    <Form>
        <Form.Group className ='mb-3' controlId='formBasicEmail'>

        <Form.Label>User Name</Form.Label>
        <Form.Control type='text' placeholder='Username' />
    </Form.Group>

<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>password</Form.Label>
    <Form.Control type='password' placeholder='Password' />
</Form.Group>
<Button variant='primary' type='submit'>Submit</Button>
    </Form>
        </div>
    </div>
  )
}

export default AdminLogin