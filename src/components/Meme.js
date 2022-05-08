import React from "react" 
import memesData from "../memesData.js"

function Meme() { 

    function getMemesImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = (memesArray[randomNumber].url)
        console.log(url)
    }

    return (
        <main>
            <form className="form">
                <input type="text" className="form-input" placeholder="top text"/>
                <input type="text" className="form-input" placeholder="bottom text"/>
                <button className="form-button" onClick={getMemesImage}>Get a new meme image</button>
            </form>
        </main>
    )
}

export default Meme 