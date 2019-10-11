import React from "react"


const Character = props => {
    return (
        <div className="character" >
            <h2>Name: {props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Hair Color: {props.hair}</p>
        </div>
    )
}
export default Character