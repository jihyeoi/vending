import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Snacks() {
    const [count, setCount] = useState(0);


    function handleClick(evt) {
        setCount(count => count + 1);
    }


    return (
        <div>
            <h1>HOW MANY SNACKS DO YOU WANT</h1>
            <img
                src="https://i.giphy.com/VvQvOFqPjZLi.gif"
                alt="Cartoon man eating lots of donuts."
            />
            <h2>{count}</h2>
            <button onClick={handleClick}>More SNACKS!!!</button>
            <button><Link to="/"> Vending Machine </Link></button>
        </div>
    );
}

export default Snacks;