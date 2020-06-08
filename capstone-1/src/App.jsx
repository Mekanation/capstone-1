import React, {useState, useEffect} from 'react';
import './App.css';
import ProductList from './Components/ProductList';



function App() {
  const [products, updateProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Mekanation/capstone-1/caleb-waters/capstone-1/src/data.json")
      .then(res => res.json())
      .then(json => {
        updateProducts(json.products);
        
      },[])
  })
  
  return (
    <div className="App">
      <ProductList products={products}/>
     
    </div>
  );
}

export default App;
