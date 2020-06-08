import React from 'react';
import ProductCard from './ProductCard';


function ProductList(props) {
  return (
    <div>
        <ProductCard products={props.products}></ProductCard>
    
    </div>
  );
}

export default ProductList;
