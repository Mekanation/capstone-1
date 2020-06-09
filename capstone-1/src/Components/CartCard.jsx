import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NumberFormat from 'react-number-format';
function CartCard(props) {

  return (

    props.props.cart.map((item, index) => <div key={index}>

      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={item.products.image_url} />
        <Card.Body>
          <Card.Title>{item.products.product_name}</Card.Title>
          <h5>Price:<NumberFormat value={(item.products.price * item.products.reserved_quantity)} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /></h5>
          <Card.Text><input value={item.products.reserved_quantity} onChange={e => item.products.reserved_quantity = e.target.value} /></Card.Text>
          <Button variant="outline-danger" onClick={() => props.props.removeFromCart(item)}>Remove From Cart</Button>

        </Card.Body>





      </Card>


    </div>)



  );
}

export default CartCard;