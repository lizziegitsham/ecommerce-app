import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { MENU_URL, PRODUCTS_URL } from './constants';
import { DropdownMenu } from './components';

const getMenu = axios.get(MENU_URL);
const getProducts = axios.get(PRODUCTS_URL);

export const App = () => {
  const [allMenuItems, setMenu] = useState({menus: []});
  const [allProducts, setProducts] = useState({products: []});
  
  useEffect(() => {
  const getHomePageData = async () => {
    const res = await axios.all([getMenu, getProducts]).then(axios.spread((...responses) => {
    const menus = responses[0].data[0];
    const products = responses[1].data;
    setMenu({menus: menus});
    setProducts({products: products});
    console.log(menus, allProducts);
  }));
  };
  // .catch(errors => {
  //   console.error(`Error: ${errors}`)
  // })
getHomePageData();
}, []);
  // useEffect(() => {
  //   getHomePageData();
  // }, []);

  return (
    <div className="App">
      <DropdownMenu content={allMenuItems} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
