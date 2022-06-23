import React from "react";
import { Card } from "./components/Card";
import data from "./data"
import { Navbar } from "./components/Navbar"

export default function App () {
    const cardElements = data.map( object => {
        return (
            <Card
                object = {object}
            />
    )})
    
        
    return (
        <div>
            <Navbar/>

    <div className="card--list">    


        {cardElements}
    </div>
        </div>
        
    )
}