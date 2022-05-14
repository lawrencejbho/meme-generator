import React from "react"
import pikachu from "../images/pikachu.jpeg"

function Header() {
    return (
        <header className="header">
            <img 
            src={pikachu}
            className="header--image" 
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">hoho</h4>


        </header>

    )
}

export default Header