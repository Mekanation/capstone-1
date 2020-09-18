import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import Header from './Components/Header';


function App() {
  const [products, updateProducts] = useState([]);
  const [cart, updateCart] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {

    fetch("https://raw.githubusercontent.com/Mekanation/capstone-1/caleb-waters/capstone-1/src/data.json")
      .then(res => res.json())
      .then(json => { updateProducts(json.products) });

  }, [])


  const addToCart = (products) => {
    if (cart.some(item => products.id === item.products.id)) {
      alert('Item is already in cart, Please adjust quantities in there.')
    } else {
      const newCart = [...cart, { products }];
      updateCart(newCart);
      console.log(newCart);

    }




  }


  const removeFromCart = index => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    updateCart(newCart);
  }

  function searchProducts() {
    console.log(searchTerm);
    const regexp = new RegExp(searchTerm, 'gi');
    const filteredProducts = products.filter((p) => {
      const productValues = Object.values(p)
      const isMatch = productValues.filter(item => item.toString().match(regexp))
      if (isMatch.length === 0) {
        return null;
      }
      return p;

    });

    console.log(filteredProducts)
    if (filteredProducts.length === 0) {
      alert('Nothing matches that search');
    }
    return setProductsFiltered(filteredProducts);
  }

  return (
    <div className="App">
      <Header products={products} cart={cart} updateCart={updateCart} addToCart={addToCart} removeFromCart={removeFromCart} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchProducts={searchProducts} productsFiltered={productsFiltered} />
      <ProductList products={products} addToCart={addToCart} productsFiltered={productsFiltered} />

    </div>
  );
}

export default App;
