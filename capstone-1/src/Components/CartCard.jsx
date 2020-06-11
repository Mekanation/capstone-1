import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NumberFormat from 'react-number-format';
import useForceUpdate from 'use-force-update';

function CartCard(props) {
  const forceUpdate = useForceUpdate();
  const decrement = (item) => {
    if (item.products.reserved_quantity !== 0) {
      item.products.reserved_quantity--;
      forceUpdate();
    }

  }
  const incrementCheck = (item) => {
    if (item.products.reserved_quantity !== item.products.quantity) {
      item.products.reserved_quantity++;
      forceUpdate();
    } else {
      alert(`There is no more ${item.products.product_name} available for you`);
    }

  }


  return (

    props.props.cart.map((item) => <div key={item.products.id}>
      {console.log(item)}

      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={item.products.image_url} />
        <Card.Body>
          <Card.Title>{item.products.product_name}</Card.Title>
          <h5>Price:<NumberFormat value={(item.products.price * item.products.reserved_quantity)} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /></h5>
          <div><Card.Text> {item.products.reserved_quantity} </Card.Text>
            <Button variant="primary" onClick={() => incrementCheck(item)}>+</Button>
            <Button variant="danger" onClick={() => decrement(item)}>-</Button>
          </div>
          <Button variant="outline-danger" onClick={() => props.props.removeFromCart(item)}>Remove From Cart</Button>

        </Card.Body>





      </Card>


    </div >)



  );
}

export default CartCard;