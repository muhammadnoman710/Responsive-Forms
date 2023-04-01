import React from 'react'
import "./Main.css"
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <Container>
      <Form>
      <Row className="align-items-center">
      <Col sm={4}>
        <h5>Bank Account</h5>
    <Form.Select aria-label="Default select example">
      <option>Select..</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Col>
    <Col sm={2}>
    <h5>Statement Date</h5>
      <Form.Group className="mb-3">
        <Form.Control type="date" placeholder="18/01/2023" />
      </Form.Group>
      </Col>
      <Col sm={3}>
      <h5>Statement Balance</h5>
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="0.00" />
      </Form.Group>
      </Col>
      <Col sm={3}>
        <button className='button'>Load Transactions</button>
      </Col>
      </Row>
    </Form>
    <hr></hr>
    <Row>
      <Col sm={2}>
        <h6>Opening Balance</h6>
        <input className="calculations" type="number" placeholder='0.00'></input>
      </Col>
      <Col sm={1}>
      <i className="bi bi-plus-circle" style={{fontSize:"1.5rem"}}></i>
      </Col>
      <Col sm={2}>
      <h6>Receipts</h6>
      <input className="calculations" type="number" placeholder='0.00'></input>
      </Col>
      <Col sm={1}>
      <i className="bi bi-plus-circle" style={{fontSize:"1.5rem"}}></i>
      </Col>
      <Col sm={2}>
      <h6>Payments</h6>
      <input className="calculations" type="number" placeholder='0.00'></input>
      </Col>
      <Col sm={1}>
      <i className="bi bi-plus-circle" style={{fontSize:"1.5rem"}}></i>
      </Col> 
      <Col sm={2}>
      <h6>Balance</h6>
      <input className="calculations" type="number" placeholder='0.00'></input>
      </Col>
      <Col sm={2}>
      <h4 className='heading-4'>Difference</h4>
      <p>0.00</p>
      </Col>
    </Row>
    <hr></hr>
    <div className='SearchBar'>
      <nbsp>Search </nbsp>
    <input type="text"/>
    </div>
    {/* <Form className="SearchBar">
            <Form.Control
              type="search"
              className="SearchBar"
            /> 
    </Form>*/}
    </Container>
  )
}

export default Main