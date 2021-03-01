import React from 'react';
import "./Cart.css";
import logo from "../../images/kkr-logo.png"

const Cart = ({ cart }) => {

    const total = cart.reduce((total, playe) => total + playe.auctionPrice, 0);
    const name = (cart.map((name) => {
        return (

            <div>
                <ul>
                    <li>{name.name} <span className="kkr">&</span> Salary  :(₹){name.auctionPrice} cr</li>
                </ul>
            </div>
        )
    }))

    return (
        <div id="cart">
            <div className="cart-container">
                <img id="logo" src={logo} alt="" />
                <h1>Kolkata Knight Riders</h1>
                <h3>Team Details</h3>
                <p>Added new Member : {cart.length}</p>
                <p>Total Budget :(₹) <span className="kkr colorHigh">{total}</span>  cr</p>
                <p> <span className="kkr"> KKR </span> Team Member are : {name}</p>

            </div>
        </div>
    );
};

export default Cart;