import { useEffect, useState } from "react";
import { href } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

function Burger(){

    const buttonLabel = "its a button";
    const max = 1000;

    //dunno how this works to a full extent.
    // I dont know what useState does
    // I dont know what the array values mean/do to a full extent
    //[variableName, method..?] = useState(?????); 
    const [count, setCount] = useState(0); 
    const [crash, setCrash] = useState(false);

    useEffect(() => {
        //Creats a random number (param1) every ? ms (param2)
        const interval = setInterval(() => {
            setCount(Math.floor(Math.random() * (max + 1)))}
            );
        //Clears the interval so that it can be updated?
        return () => clearInterval(interval);}
    );
    return(
        <>
            <head>
                <link rel="stylesheet" href="index.css"></link>
            </head>
            <button
            className = "colored-button"
            onClick={<Navigate to="/" />}>
                Go To New Page
            </button>

            <button
            onClick={() => alert("ALERT: you have been ALERTED")}>
            Alert test
            </button>
            <div>
                <p>Everchanging random number: {count}</p>
                <p><a href="/">Link tlo</a></p>
            </div>
        </>
    );
}

export default Burger;