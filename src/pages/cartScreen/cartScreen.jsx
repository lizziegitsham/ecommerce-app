import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useLocation, useHistory, BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import { CartProduct } from '../../components';
import Button from '@material-ui/core/Button';

const Header = styled.div`
display: flex;
margin: 50px;
padding: 10px;
flex-wrap: wrap;
`;

const HomeButton = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
    return (
    <button type="button" onClick={handleClick}>
        <HomeIcon />
      Go home
    </button>
  );
}


export const CartScreen = () => {
    let location = useLocation()
    const [ cart, setCart ] = useState([]);
    console.log('state', location?.data);
    const products = location?.data?.cart;
    const cartTotal = products?.reduce((total, { price = 0 }) => total + price, 0);


  const addToCart = (product) => {
      let hardCopy = [...products];
      console.log('hardcopy', hardCopy);
      hardCopy = [...hardCopy, product];
     console.log('hardcopy 3 add', hardCopy);
      setCart(hardCopy);
      console.log(cart);
    };

    const removeFromCart = (product) => {
    console.log('hardcopy', [...products]);
    let hardCopy = [...products];
    console.log('hardcopy 2', hardCopy);
    hardCopy = hardCopy.filter((product) => product.id !== product.id);
    console.log('hardcopy 3', hardCopy);
    setCart(hardCopy);
    //This works when you go back to home then go back to the checkout page, would like to add in dynamic refreshing on the page.
  };

  const emptyCart = () => {
      let hardCopy = [];
      console.log('hardCopy');
      setCart(hardCopy);
  }


  const amountOfProducts = (id) => cart.filter((product) => product?.id === id).length;

  const listProductsInCart = () => products?.map((product, productIdx) => (
    <div key={product?.id}>
     <CartProduct {...product} quantity={amountOfProducts()} key={`card-${productIdx}`} />
      <button type="submit" onClick={() => removeFromCart(product)}>Remove</button>
      {/*Would add buttons in here to increment/decrement the product quantity, and if the value was already one would only offer the remove button as an option*/}
    <button type="submit" onClick={() => removeFromCart(product)}>-</button>
    <button type="submit" onClick={() => addToCart(product)}>+</button>

    </div>
  ));
    console.log('screen page', products);
    if (!products || location?.data == undefined) return ( <div><h1>Your cart is empty</h1></div>);
    else return(
        <div>
        <span>{HomeButton()}</span>
        <h1>Cart Screen</h1>
        <div>
        <div>{listProductsInCart()}</div>
        <div>Total: £{cartTotal}</div>
        <Button size="small" onClick={() => emptyCart()}>Empty Basket</Button>
        </div>
    </div>
    );
}
