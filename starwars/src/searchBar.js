import React, { useState, useEffect } from "react"
import axios from 'axios';
import Character from './Character.js'
import styled from 'styled-components'


const Card = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`


export default function SearchBar() {
    const [input, setInput] = useState("");
    const [characters, setCharacters] = useState([]);
    
 
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people"
            )
            .then(response => {
                //  console.log(response);
                setCharacters(response.data.results)
                console.log(response.data.results)
            })
            .catch(error => {
                console.log("oh no!", error)
            });
    }, [input]);
   console.log(input);
   
      return (
        <div>
            <input placeholder = "search..." value={input} onInput={element => setInput(element.target.value)}/>,
            <Card>
            {characters.map(person => {
                if (person.name.toLowerCase().includes(input.toLowerCase())) {
                return (
                    <Character name={person.name} gender={person.gender} hair={person.hair_color} height={person.height}
                    />
                );
            }
            })}
            </Card>
        </div>
    );
}