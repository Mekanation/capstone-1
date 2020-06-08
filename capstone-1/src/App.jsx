import React, {useState, useEffect} from 'react';
import './App.css';
import jsonData from "./data.json";


function App({jsonData}) {
  const [products, updateProducts] = useState(null);
  
  useEffect(() => {
    fetch("capstone-1/src/data.json")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        updateProducts(result);
        console.log(products);
      },[products])
  })
  
  return (
    <div className="App">
      
     
    </div>
  );
}

export default App;
