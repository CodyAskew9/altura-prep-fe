import React from 'react'
import  Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './adminLogin.css'


const AdminLogin = () => {
  return (
    <div className='container'>
        <div className='background'>
    <Form>
    
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>Scan Card</Form.Label>
    <Form.Control type='text' placeholder='Card Number' />
</Form.Group>
<Button variant='primary' type='submit'>Submit</Button>
    </Form>
        </div>
    </div>
  )
}

export default AdminLogin