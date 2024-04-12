import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'
// import ShopPage from "../ShopPage/ShopPage";

function Header() {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="header__logo">
          <h1>BB</h1>
        </div>
        <div className="headerNavlinks">
          <ul>
            <li>
              <Link to='/' className="header__navlink" href="#">Home</Link>
            </li>
            <li>
              <Link to='shop' className="header__navlink"  href="#">Shop</Link>
            </li>
            <li>
              <a className="header__navlink"  href="#">Hindi Books</a>
            </li>
            <li>
              <a className="header__navlink"  href="#">English Books</a>
            </li>
            <li>
              <a className="header__navlink"  href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
