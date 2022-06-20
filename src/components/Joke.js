import React from "react";

export function Joke(props) {
    return (
        <div>
            <h3>{props.setup}</h3>
            <h1>{props.punchline}</h1>
        </div>
    )
}