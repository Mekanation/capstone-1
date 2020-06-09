import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import Header from './Components/Header';


function App() {
  const [products, updateProducts] = useState([]);
  const [cart, updateCart] = useState([]);
  const [productsFiltered, updateProductsFiltered] = useState([]);


  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Mekanation/capstone-1/caleb-waters/capstone-1/src/data.json")
      .then(res => res.json())
      .then(json => { updateProducts(json.products) });

  }, [])


  const addToCart = (products) => {
    products.reserved_quantity++;
    const newCart = [...cart, { products }];
    updateCart(newCart);
    console.log(cart);
  }


  const removeFromCart = index => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    updateCart(newCart);
  }

  const searchProducts = value => {

    const productsFilter = products.filter((product) => Object.values(product.product_name.toLowerCase()).includes(value.toLowerCase()));
    updateProductsFiltered(productsFilter);
    console.log(productsFilter);

  }



  return (
    <div className="App">
      <Header products={products} cart={cart} updateCart={updateCart} addToCart={addToCart} removeFromCart={removeFromCart} searchProducts={searchProducts} />
      <ProductList products={products} addToCart={addToCart} productsFiltered={productsFiltered} />

    </div>
  );
}

export default App;
