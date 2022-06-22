import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEarth, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export function Card(props){
    console.log(props.object)
    return (
        <div className="card"> 
            <div className="image--container">
                <img className="card--image"src={props.object.imageUrl}></img>
            </div>
            
            <div className="card--info">
                <FontAwesomeIcon icon={faLocationDot}/>
                <p className="card--location">{props.object.location}</p>
                <a href={props.object.googleMapsLink}>View on Google Maps</a>
                <h2>{props.object.title}</h2>
                <p><span>{props.object.startDate}</span> - <span>{props.object.endDate}</span></p>
                <p>{props.object.description}</p>
            </div>
            
        </div>
    )
    
   
}