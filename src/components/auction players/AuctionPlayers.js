import React, { useEffect, useState } from 'react';
import "./AuctionPlayers.css";
import playersData from "../../fakedata/data.json";
import Players from '../players/Players'
import Cart from './../cart/Cart';
const AuctionPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddPlayers = (player) => {
        console.log("add", player);
        const newCart = [...cart, player];
        setCart(newCart);
    }
    useEffect(() => {
        setPlayers(playersData);
    }, [])

    return (
        <div className="AuctionPlayers-container">
            <div className="player-container">
                {
                    players.map(playerlist => <Players
                        handleAddPlayers={handleAddPlayers}
                        player={playerlist} > </Players>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default AuctionPlayers;