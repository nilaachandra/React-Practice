import React from "react";

const Card = (props) => {
    return(
        <div className="card h-[20vh] w-[40vh] border border-red-500">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}
export default Card