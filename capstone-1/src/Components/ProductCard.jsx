import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NumberFormat from 'react-number-format';

function ProductCard(props) {

  return (


    props.products.map(product => <div key={product.id}>

      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={product.image_url} />
        <Card.Body>
          <Card.Title>{product.product_name}</Card.Title>

          <h5><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /></h5>
          <Button variant="primary" onClick={() => props.addToCart(product)}>Add To Cart</Button>

        </Card.Body>





      </Card>
    </div>)



  );
}

export default ProductCard;
