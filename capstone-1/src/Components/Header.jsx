
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import CartModal from './CartModal';



function Header(props) {
  const [input, setInput] = useState('');

  return (

    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Releaf</Navbar.Brand>
      <Nav className="mr-auto">
        <CartModal props={props} />
      </Nav>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => props.searchProducts(e.target.value)} />
        <Button variant="outline-info" type="submit">Search</Button>
      </Form>

    </Navbar>
  );
}

export default Header;


