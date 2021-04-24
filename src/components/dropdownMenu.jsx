import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

export const DropdownMenu = (content) => {
  console.log('content', content.content.menus.name);
  const menu = content.content.menus;
  const subMenu = menu.children;
  console.log('menu', subMenu);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

//   const renderMenu = (subMenus) => subMenus ? subMenus.map((subMenu, idx) => );

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>{menu.name}</span>
      </button>
      <div>
          {/*{subMenu.map(function}*/}
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
            {/*{subMenu.map(name, subMenuIdx) => (*/}
            {subMenu.map(({name}) => (
                            <div>
          <li><a href="/messages">{name}</a></li>
          </div>
            ))}
        </ul>
      </nav>
      </div>
    </div>
  );
};