import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { MENU_URL, PRODUCTS_URL } from '../../constants';
import { DropdownMenu, ProductCard } from '../../components';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


//would use this spinner to add a loading overlay whilst the data was returned using an isLoading useState hook
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const CircularIndeterminate = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </div>
  );
};

const getMenu = axios.get(MENU_URL);
const getProducts = axios.get(PRODUCTS_URL);

const Tiles = styled.div`
display: flex;
justify-content: center;
margin: 50px;
flex-wrap: wrap;
`;

export const HomeScreen = () => {
  const [allMenuItems, setMenu] = useState({menus: []});
  const [allProducts, setProducts] = useState({products: []});
  const [cart, setCart] = useState([]);
  
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
  })
  };

getHomePageData();
}, []);

  const products = allProducts.products;
  const addToCart = (product) => {setCart([...cart, product])};
  const emptyCart = () => setCart([]);

    
   return (

    <div className="App">
     <DropdownMenu content={allMenuItems} cart={cart} emptyCart={() => emptyCart()} />
      <Tiles>
        {products.map((product, productIdx) => (
        <ProductCard {...product} key={`card-${productIdx}`} addClick={() => addToCart(product)} />
        ))}
      </Tiles>
    </div>
  );
}
