import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
