import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character.js'
import styled from 'styled-components'


const Card = styled.div `
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`



export default function CharacterCard() {
const [characters, setCharacters] = useState([]);

useEffect(() => {
   axios
   .get("https://swapi.co/api/people"
   ) 
   .then(response => {
    //  console.log(response);
     setCharacters(response.data.results)
     console.log (response.data.results)
   })
   .catch(error => {
     console.log("oh no!" , error)
   });
}, []);

console.log(characters)

return(
    <Card>
     { characters.map(person => {
       return (
        <Character name = {person.name} gender = {person.gender} hair = {person.hair_color} height = {person.height}
        />
     );
     })}
    </Card>
)
}