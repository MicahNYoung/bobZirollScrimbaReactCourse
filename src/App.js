import React from "react";
import { Joke } from "./components/Joke";

export default function App() {
    return (
        <div>
            <Joke
                isFunny = {true}
                setup= "How do you comfort a JavaScript bug?"
                punchline="You console it."/>
            <Joke
                setup= "Why did the child component have such great self-esteem?"
                punchline="Because its parent kept giving it props!"/>
            <Joke
                setup= "What's the object oriented way to become wealthy?"
                punchline="Inheritance"/>
            <Joke
                setup= "Why did the programmer quit his job?"
                punchline="Because he didn't get arrays."/>
            <Joke
                setup= "I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."/>
        </div>
    )
}