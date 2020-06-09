import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CartCard(props) {
   
  return (
        
         props.props.cart.map((item, index) => <div key={index}>
             
             <Card style={{width: '18rem', margin: '10px'}}>
             <Card.Img variant="top" src={item.products.image_url}/>
             <Card.Body>
             <Card.Title>{item.products.product_name}</Card.Title>
             <Card.Text>Price:{item.products.price}</Card.Text>
             <Button variant="outline-danger" onClick={() => props.props.removeFromCart(item)}>Remove From Cart</Button>
             
             </Card.Body>
             
        
             

             
             </Card>
                
               
             </div>)
        
        
         
  );
}

export default CartCard;