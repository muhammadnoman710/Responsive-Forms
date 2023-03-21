import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Container className="header">
        <Nav>
    <Nav.Item>
        <Nav.Link eventKey="link-1">Home /</Nav.Link>
    </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Bank /</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/statement">Reconcile Statement Balance</Nav.Link>
      </Nav.Item>
      <Nav.Item></Nav.Item>
      </Nav>
      <hr></hr>
      <h4>Reconcile Statement Balance</h4>
      <hr></hr>
    </Container>
  )
}

export default Header