import React from "react";
import "../Header.css"


export default function Header(){
    return(
        <header className="header">
            <img src="/globe.png" className="header-logo" alt="globe logo" />
            <h1 className="header-title">my travel journal</h1>
        </header>
    )
}