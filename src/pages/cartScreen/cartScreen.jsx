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
    let location = useLocation();
    const cart = location?.data?.cart;
    
    const [ basket, setBasket ] = useState([cart]);
    console.log('state', basket);
    const products = location?.data?.cart;
    const cartTotal = products?.reduce((total, { price = 0 }) => total + price, 0);


  const addToCart = (product) => {
      let hardCopy = [...products];
      hardCopy = [...hardCopy, product];
      console.log('add to cart product copy', hardCopy);
      setBasket(hardCopy);
    };

    const removeFromCart = (product) => {
    let hardCopy = [...products];
    hardCopy = hardCopy.filter((product) => product.id !== product.id);
    console.log('hardcopy 3', hardCopy);
    // This console log is here to purely show that the filter function is working, would like to force cart to refresh on the page but would look to using local storage wqith react hooks - ultimately would have liked to have used a POST with a /cart API
    setBasket(hardCopy);
  };

  const emptyCart = () => {
      let hardCopy = [];
      setBasket(hardCopy);
      console.log('new cart', cart);

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
