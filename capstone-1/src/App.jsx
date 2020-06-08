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
  
  return (
    <div className="App">
      <Header/>
      <ProductList products={products} addToCart={addToCart}/>
     
    </div>
  );
}

export default App;
