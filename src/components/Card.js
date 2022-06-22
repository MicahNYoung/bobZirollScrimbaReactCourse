import React from "react"


export default function Card(props) {
    let badgeText
    if (props.object.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.object.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.object.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={"images/redStar.png"} className="card--star" />
                <span>{props.object.stats.rating}</span>
                <span className="gray">({props.object.stats.reviewCount}) • </span>
                <span className="gray">{props.object.location}</span>
            </div>
            <p className="card--title">{props.object.title}</p>
            <p className="card--price"><span style={{fontWeight: 'bold'}}>From ${props.object.price}</span> / person</p>
        </div>
    )
}
// title = {object.title}
//                 description = {object.description}
//                 price = {object.price}
//                 coverImg = {object.coverImg}
//                 rating = {object.stats.rating}
//                 reviewCount = {object.stats.reviewCount}
//                 location = {object.location}
//                 openSpots = {object.openSpots}

