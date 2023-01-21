import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={`../images/${props.img}`} className="card-image" />
          <div className="card-states">
              <img src="../images/star.png" className="star1" />
              <span>{props.rating}</span>
              <span className="grey">({props.reviewCount})</span>
              <span className="grey">{props.country}</span> 
          </div>
          <p>{props.title}</p>
          <p><b>From ${props.price}</b>/ person</p>
        </div>
    )
}