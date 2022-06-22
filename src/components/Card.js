import React from "react";

export function Card(props){
    console.log(props.object)
    return (
        <div> 
            <img src={props.object.imageUrl}></img>
            <p>{props.object.location}</p>
            <a href={props.googleMapsLink}>View on Google Maps</a>
            <h2>{props.title}</h2>
            <p><span>{props.startDate}</span> - <span>{props.endDate}</span></p>
            <p>{props.description}</p>
        </div>
    )
    
   
}