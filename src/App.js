import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { MENU_URL, PRODUCTS_URL } from './constants';
import { DropdownMenu, ProductCard } from './components';
import { CartScreen, HomeScreen } from './pages';
import styled from 'styled-components';

const getMenu = axios.get(MENU_URL);
const getProducts = axios.get(PRODUCTS_URL);

const Tiles = styled.div`
display: flex;
justify-content: center;
margin: 50px;
flex-wrap: wrap;
`;

//My linting is not currently working, I have tried rebooting everything and need to update but with my internet connection I'm currently unable to, I can't apologise enough for the linting errors
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
  }))
  .catch(errors => {
    console.error(`Error: ${errors}`)
  })}
getHomePageData();
}, []);

  const products = allProducts.products;

  return (
    <div>
      <Router>
        <Route exact path="/" component= {HomeScreen} />
        <Route path="/basket" component={CartScreen} />
      </Router>
    </div>
  );
}
