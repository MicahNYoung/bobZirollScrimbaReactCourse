import React from "react"
import Card from "./components/Card"
import data from "./data.js"
import {Navbar} from "./components/Navbar"
import {Hero} from "./components/Hero"

export default function App() {
    const cardElements = data.map(object=> {
        return (
        <div>
            <Card
                key = {object.id}
                object = {object}
            />        
            </div>
    )})

    return (
        <div>
            <Navbar />
            <Hero/>
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
        
    )
}
