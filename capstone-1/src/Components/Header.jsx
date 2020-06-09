
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import CartModal from './CartModal';


function Header(props) {
    
    return (

 <Navbar bg="dark" variant="dark">
 <Navbar.Brand href="#home">Releafs</Navbar.Brand>
 <Nav className="mr-auto">
 <CartModal props={props}/>
</Nav>

 <Form inline>
   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
   <Button variant="outline-info">Search</Button>
 </Form>
</Navbar>
    );
}

export default Header;