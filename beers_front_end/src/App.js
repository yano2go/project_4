import React from 'react';
import './App.css';
import { useState, useEffect } from "react";

function App() {
const url = 'http://localhost:3000/beers'
const [beerData, setBeerData] = useState([]);
useEffect(() => {
  // if (!query) return;

  const fetchData = async () => {
    
    const response = await fetch(url, { method: "get" });
    const beerData = await response.json();
    setBeerData(beerData);
    
  };

  fetchData();
}, [url]);
const [formInputs, updateFormInputs] = useState({  brand: '', style: '',name: '', flavor:'', abv:''});
const handleSubmit  = async (event) =>{
  event.preventDefault()
  try{
    const response = await fetch('http://localhost:3000/beers', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    updateFormInputs({
      brand: '',
      style: '',
      name: '',
      flavor:'',
      abv:''
    })
    console.log(data)
    // setNotices([data, ...notices])
  }catch(error){
    console.error(error)
  }
}
return (
    <div className="beerform">
      `${JSON.stringify(beerData)}`
      <h4>Post your favorite beer</h4>
    <form onSubmit= {handleSubmit}>
      <label htmlFor="brand">brand</label>
      <input type="text" onChange={(event)=>updateFormInputs({...formInputs, brand:event.target.value})}/>
      <label htmlFor="style">Style</label>
      <input type="text" onChange={(event)=>updateFormInputs({...formInputs, style:event.target.value})}/>
      <label htmlFor="name">name</label>
      <input type="text" onChange={(event)=>updateFormInputs({...formInputs, name:event.target.value})}/>
      <label htmlFor="flavor">flavor</label>
      <input type="text" onChange={(event)=>updateFormInputs({...formInputs, flavor:event.target.value})}/>
      <label htmlFor="abv">abv</label>
      <input type="text" onChange={(event)=>updateFormInputs({...formInputs, abv:event.target.value})}/>
      <input type="submit" className="submit" />
    </form>
    </div>
  );
}

export default App;
