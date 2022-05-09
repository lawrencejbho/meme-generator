import React, {useState} from "react" 
import memesData from "../memesData.js"

function Meme() { 

    const [meme, setMeme] = useState({topText:"", bottomText:"", randomImage:"http://i.imgflip.com/1bij.jpg"})

    console.log(meme)





    const [memeImage, setMemeImage] = useState("")

    function getMemesImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = (memesArray[randomNumber].url)
        console.log(url)
        setMeme(prevValue => ({...prevValue, randomImage: `${url}`}))
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="top text"/>
                <input type="text" className="form-input" placeholder="bottom text"/>
                <button className="form-button" onClick={getMemesImage}>Get a new meme image</button>
            </div>
            <img src={meme.randomImage} />
        </main>
    )
}

export default Meme 