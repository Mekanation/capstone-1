import React, {useState, useEffect} from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import Header from './Components/Header';


function App() {
  const [products, updateProducts] = useState([]);
  const [cart, updateCart] = useState([]);
  
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Mekanation/capstone-1/caleb-waters/capstone-1/src/data.json")
      .then(res => res.json())
      .then(json => {
        updateProducts(json.products);
        
      },[])
  })

  const addToCart = products => {
    const newCart= [...cart, {products}];
    updateCart(newCart);

  }

  const removeFromCart = index => {
    const newCart=[...cart];
    newCart.splice(index, 1);
    updateCart(newCart);
  }
  
  return (
    <div className="App">
      <Header cart={cart} updateCart={updateCart} addToCart={addToCart} removeFromCart={removeFromCart}/>
      <ProductList products={products} addToCart={addToCart}/>
     
    </div>
  );
}

export default App;
