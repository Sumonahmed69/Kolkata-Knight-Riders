import React from 'react';
import "./Cart.css";
import logo from "../../images/kkr-logo.png"

const Cart = (props) => {
    const cart = props.cart;
    const name = props.cart;

    const total = cart.reduce((total, playe) => total + playe.auctionPrice, 0);

    return (
        <div>
            <div className="cart-container">
                <img id="logo" src={logo} alt="" />
                <h1>Kolkata Knight Riders</h1>
                <h3>Team Details</h3>
                <p>Added new Member : {cart.length}</p>
                <p>Total Salary :(₹) {total} cr</p>
               


            </div>
        </div>
    );
};

export default Cart;