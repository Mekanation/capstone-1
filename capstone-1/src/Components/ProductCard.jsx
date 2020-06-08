import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

function ProductCard(props) {
  return (
    
        
         props.products.map(product => <div key={product.id}>
             <Card.Group>
             <Card>
                 <div class="image-wrapper">
             <Image src={product.image_url} size='small' wrapped />
             </div>
             <Card.Content>
        
             {product.product_name}

             </Card.Content>
             </Card>
            </Card.Group>
             
             </div>)
         
        
    
  );
}

export default ProductCard;
