import React from "react"
import pikachu from "../images/pikachu.jpeg"

function Header() {
    return (
        <div>
            <img 
            src={pikachu}
            className="header-image" 
            />
            <h2 className="header-title">Header component</h2>
            <h4 className="header-project"></h4>


        </div>

    )
}

export default Header