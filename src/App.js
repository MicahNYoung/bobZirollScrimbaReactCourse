import React from "react";
import { Card } from "./components/Card";
import data from "./data"

export default function App () {
    const cardElements = data.map( object => {
        return (
            <Card
                object = {object}
            />
    )})
    
        
    return (
        <div>
            {cardElements}
        </div>
    )
}