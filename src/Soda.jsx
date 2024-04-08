import React, { useState } from "react";

function Soda() {
    const [count, setCount] = useState(0);

    function handleClick(evt) {
        setCount(count => count + 1);
    }

    return (
        <div>
            <h1>HOW MANY SODAS DO YOU WANT</h1>
            <img
                src="https://i.giphy.com/DbD6EnlEQmjTi.gif"
                alt="Diet coke exploding everywhere."
            />
            <h2>{count}</h2>
            <button onClick={handleClick}>More Soda!!!</button>
            <button><Link to="/"> Vending Machine </Link></button>
        </div>
    );
}

export default Soda;