import React from 'react';
import ProductCard from './ProductCard';




function ProductList(props) {
  const isFiltered = props.productsFiltered;
  if (isFiltered.length > 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex align-content-start flex-wrap" >

            <ProductCard products={props.productsFiltered} addToCart={props.addToCart}></ProductCard>

          </div>
        </div>

      </div>);
  } else {
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
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col d-flex align-content-start flex-wrap" >

  //           <ProductCard products={props.products} addToCart={props.addToCart}></ProductCard>

  //         </div>
  //       </div>

  //     </div>
  //   );
  // }
}
export default ProductList;
