import React from 'react'
import  Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'


const Login = () => {
  return (
    <div className='Main'>

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
    </div>
  )
}

export default Login