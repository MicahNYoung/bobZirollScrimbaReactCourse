import React from "react";
import memesData from "../data"

export function Form() {
    function randomMeme(){
        const memesArray = memesData.data.memes;
        let randomIndex = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[randomIndex].url;
        console.log(url)
    }
    return(
        <main>
            <form className="form">

                <input className="form--input" type="text" placeholder="Top text"></input>
                <input className="form--input" type="text" placeholder="Bottom text"></input>
                <button onClick={randomMeme()}className="form--button">Get a new meme 🖼</button>
            </form>
        </main>
    )
} 