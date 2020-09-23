import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="beerform">
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
