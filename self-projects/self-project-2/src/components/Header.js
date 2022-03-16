import React from "react"
import navIcon from "../images/world-icon.png"

export default function Header() {
    return(
        <header>
            <img className="header--icon" src={navIcon}></img>
            <h4 className="header--title">my travel journal.</h4>
        </header>
    );
}