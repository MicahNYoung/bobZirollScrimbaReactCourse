import React from "react";
import { Card } from "./components/Card";
import data from "./data"
import { Navbar } from "./components/Navbar.js"
import { Header } from "./components/Header.js";
import  Meme  from "./components/Meme.js";

export default function App () {
    // const cardElements = data.map( object => {
    //     return (
    //         <Card
    //             object = {object}
    //         />
    // )})
    
        
    return (
        <div>
            <Header/>
            <Meme/>
        </div>
        
    )
}