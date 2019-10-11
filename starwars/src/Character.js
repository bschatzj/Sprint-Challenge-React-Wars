import React from "react"
import styled from 'styled-components'

const Card = styled.div`
    background-color: lime;
    color: red;
    width: 500px;
    margin: 20px;
`


const Character = props => {
    return (
        <Card>
            <h2>Name: {props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Hair Color: {props.hair}</p>
        </Card>
    )
}
export default Character