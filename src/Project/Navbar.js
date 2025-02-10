import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#blogsite">BlogSite</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#myblogs">MyBlogs</Nav.Link>
            <Nav.Link href="#blogs">Public Blogs</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
  )
}

export default MyNavbar;