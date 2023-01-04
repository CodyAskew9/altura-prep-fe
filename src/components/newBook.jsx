
import React from 'react'
import Form from 'react-bootstrap/Form'
import {Button } from 'react-bootstrap'
const NewBook = () => {
  
    
  return (
    <Form>
    
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>Title</Form.Label>
    <Form.Control type='text' placeholder='Title' />
</Form.Group>
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>Author</Form.Label>
    <Form.Control type='text' placeholder='Author' />
</Form.Group>
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>Author</Form.Label>
    <Form.Control type='text' placeholder='Author' />
</Form.Group>
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>ISBN</Form.Label>
    <Form.Control type='text' placeholder='ISBN' />
</Form.Group>
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>level</Form.Label>
    <Form.Control type='text' placeholder='level' />
</Form.Group>
<Form.Group className='mb-3' controlId='formBasicPassword'>
    <Form.Label>Number of Copies</Form.Label>
    <Form.Control type='text'  />
</Form.Group>
<Button variant='primary' type='submit'>Submit</Button>
    </Form>
  )
}
export default NewBook