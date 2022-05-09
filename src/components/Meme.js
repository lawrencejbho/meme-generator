import React, {useState} from "react" 
import memesData from "../memesData.js"

function Meme() { 

    const [memeImage, setMemeImage] = useState()

    function getMemesImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = (memesArray[randomNumber].url)
        setMemeImage(url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="top text"/>
                <input type="text" className="form-input" placeholder="bottom text"/>
                <button className="form-button" onClick={getMemesImage}>Get a new meme image</button>
            </div>
            <img src={memeImage} />
        </main>
    )
}

export default Meme 