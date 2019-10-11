import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from "./Character.js"



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
    <div className = "container">
     { characters.map(person => {
       return (
        <Character name = {person.name} gender = {person.gender} hair = {person.hair_color} height = {person.height}
        />
     );
     })}
    </div>
)
}