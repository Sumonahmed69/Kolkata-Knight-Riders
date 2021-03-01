import React from 'react';
import "./Players.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Playes = (props) => {
   
    const { image, name, role, auctionPrice, matches, nationality, Runs } = props.player;

    return (
        <div className="card-container">

            <div>
                <img id="playersImage" src={image} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>Catagory : {role}</p>
                <p>Auction Price (₹): {auctionPrice} cr</p>
                <p><small>Matches : {matches}</small></p>
                <p><small>Runs : {Runs}</small></p>
                <p><small>Nationality : {nationality}</small></p>
                <button
                    className="addBtn"
                    onClick={() => props.handleAddPlayers(props.player)}>
                    <FontAwesomeIcon icon={faUserPlus} />   Add To Team</button>
            </div>
        </div>
    );
};

export default Playes;