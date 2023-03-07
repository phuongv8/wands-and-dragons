import { Link } from "react-router-dom";
import React from "react";
import { useProductsProvider } from "../utils/ProductProvider";
import SearchBar from "./SearchBar";
import { useAuth } from "./Auth";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "../App.css";
import Badge from "@mui/material/Badge";

function Navbar() {
  const auth = useAuth();
  const { cartItems } = useProductsProvider();
  const total = cartItems.reduce((acc, obj) => {
    return acc + obj.cartQuantity;
  }, 0);

  return (
    <header className="section-header">
      <section className="header-main border-bottom bg-white">
        <div className="top-nav-section-container">
          <Link to="/">
            <div className="navbar-logo">
              <img src="/images/logo.png" alt="wands and dragons logo"></img>
            </div>
          </Link>
        </div>
      </section>
      <div className="bottom-nav-section-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                  <Link to="/productspage">Shop</Link>
                </li>
                <li className="nav-link">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-link">
                  {auth.user && <Link to="/inventory">Admin</Link>}
                  {!auth.user && <Link to="/loginauth">Login</Link>}
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
              <div className="col-md-8">
                <div className="d-flex form-inputs">
                  <SearchBar />
                  <i className="bx bx-search"></i>
                </div>
              </div>
            </div>
          </div>

          <Badge color="secondary" badgeContent={total} showZero>
            <Link to="/cart">
              <ShoppingBagIcon />
            </Link>
          </Badge>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
