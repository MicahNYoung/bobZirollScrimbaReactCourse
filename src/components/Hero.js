import React from "react";
import groupPhoto from "../images/Group77.png"

export function Hero() {
    return (
        <section className="hero">        
            <img src={groupPhoto}/>
            
                <h1 className="heroTitle">Online Experiences</h1>
                <p className="heroText"> Joing unique interactive activitiies led by one-of-a-kind hosts - all without leaving home.</p>
           
                
        </section>
    )
}