import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components';
import { CartScreen } from '../../pages/cartScreen';

export const DropdownMenu = ({content, cart}) => {
  console.log('content', content);
  const menu = content?.menus;
  const subMenu = menu?.children;
  console.log('menucart', cart);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 30em
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

const options = ["Mangoes", "Apples", "Oranges"];

  const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 5px;
  color: black;
  `;

  const BasketLink = styled.link`
  flex-direction: column;
  `;

  return (
        <Main>
          <MenuHeader>
      <h1>{menu.name}</h1>
       <Link
          to={{
            pathname: "/basket",
            data: {cart},
            component: {CartScreen}
          }}
        >
        <ShoppingCart />
        <span>Go To Checkout</span>
      </Link>
      </MenuHeader>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "New In"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {subMenu?.map(({name, categories}) => (
                <ListItem onClick={onOptionClicked({name, categories})} key={Math.random()}>
          <li>{name}</li>
          <li>{` ${categories} `}</li>                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};