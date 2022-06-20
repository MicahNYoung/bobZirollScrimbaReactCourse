import React from "react";

export function Joke(props) {
    return (
        <div>
            <h1>{props.setup}</h1>
            <h3>{props.punchline}</h3>
            <p>{props.isFunny}</p>
            <hr/>
        </div>
    )
}