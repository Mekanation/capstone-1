import React from 'react';
import ProductCard from './ProductCard';




function ProductList(props) {
    
  return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-content-start flex-wrap" >
                    
        <ProductCard products={props.products} addToCart={props.addToCart}></ProductCard>
                    
                </div>
            </div>
        
        </div>
  );
}

export default ProductList;
