import React from "react";
import { Card } from "./components/Card";
import data from "./data"
import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header";
import { Form } from "./components/Form";

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
            <Form/>
        </div>
        
    )
}