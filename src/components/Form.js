import React from "react";

export function Form() {
    return(
        <main>
            <form className="form">

                <input className="form--input" type="text" placeholder="Top text"></input>
                <input className="form--input" type="text" placeholder="Bottom text"></input>
                <button className="form--button">Get a new meme 🖼</button>
            </form>
        </main>
    )
}