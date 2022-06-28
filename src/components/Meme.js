import React from "react";
import memesData from "../data"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    
    function randomMeme(){
        
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(memesArray[randomNumber].url)
        console.log(memesArray[randomNumber].url)
            setMemeImage(memesArray[randomNumber].url);
        
}
    return(
        <main>
            <div className="form">

                <input className="form--input" type="text" placeholder="Top text"></input>
                <input className="form--input" type="text" placeholder="Bottom text"></input>
                <button onClick={randomMeme}className="form--button">Get a new meme 🖼</button>
            </div>
            <img src={memeImage}></img>
        </main>
    )
} 