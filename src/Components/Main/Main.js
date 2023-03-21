import React from 'react'
import "./Main.css"
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <Container>
        <div className='first-form'>
        <h5>Bank Account</h5>
    <Form.Select aria-label="Default select example">
      <option>Select..</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <h5>Statement Date</h5>
    </Form.Select>
    </div>
    <div className='second-form'>
    <Form>
      <Form.Group className="mb-3">
      <h5>Statement Date</h5>
        <Form.Control type="date" placeholder="18/01/2023" />
      </Form.Group>
      <Form.Group className="mb-3">
      <h5>Statement Balance</h5>
        <Form.Control type="number" placeholder="0.00" />
      </Form.Group>
    </Form>
    </div>
    </Container>
  )
}

export default Main