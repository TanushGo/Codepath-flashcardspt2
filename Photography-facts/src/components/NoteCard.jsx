import React from "react";
const NoteCard = (props) => {
    return(
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <p>{props.ques}</p>
            </div>
            <div className="flip-card-back">
            <p>{props.ans}</p>
            </div>
        </div>
        
    )
}

export default NoteCard;