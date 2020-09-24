import React from 'react';
import './App.css';
import { useState, useEffect } from "react";

function App() {
const url = 'http://localhost:3000/beers'
const [data, setData] = useState([]);
useEffect(() => {
  // if (!query) return;

  const fetchData = async () => {
    
    const response = await fetch(url, { method: "get" });
    const data = await response.json();
    setData(data);
    
  };

  fetchData();
}, [url]);
  
return (
    <div className="beerform">
      `${JSON.stringify(data)}`
      <h4>Post your favorite beer</h4>
    <form>
      <label htmlFor="brand">brand</label>
      <input type="text" id="brand" />
      <label htmlFor="style">Style</label>
      <input type="text" id="style" />
      <label htmlFor="name">name</label>
      <input type="text" id="name" />
      <label htmlFor="flavor">flavor</label>
      <input type="text" id="flavor" />
      <label htmlFor="abv">abv</label>
      <input type="text" id="abv" />
      <input type="submit" className="submit" />
    </form>
    </div>
  );
}

export default App;
