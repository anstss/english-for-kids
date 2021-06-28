import "./card.scss";
import React from "react";

const Card = () => {
  return (
   <div className='card-container'>
     <div className="card border-primary text-white">
       <div className="front">Front</div>
       <div className="back">Back</div>
       <div className="card-info">
         Info
         <button>Button</button>
       </div>
     </div>
   </div>
  )
}

export default Card;