import React from 'react'
import "./Footer.css"
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
        <Container>
            <Row>
                <Col sm={10}>
                    <button className='cancel'>Cancel</button>
                </Col>
                <Col sm={4} className= "close">
                    <button className='close'>Save and Close</button>
                </Col>
            </Row>
        </Container>
  )
}

export default Footer