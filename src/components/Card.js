import React from "react"
import redStar from "../images/redStar.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card--image" />
            <div className="card--stats">
                <img src={redStar} className="card--star" />
                <span>{props.ratings}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

