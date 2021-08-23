import React, { useState, useEffect } from 'react'
import Card from './Card'

const Character = () => {
    const [character, setCharacter] = useState([]);
    const getCharacters = async() => {
        const response = await fetch('https://www.breakingbadapi.com/api/characters');
        const data = await response.json();
        console.log(data)
        setCharacter(data);
    }
    useEffect(() => {
        getCharacters();
    })
    
    return (
        <>
            <section>
                <h1>List of all breaking bad characters</h1>
                <div className="main-div">
                {console.log(Character)}
                    {character.map((element, index)=>{
                        return (<>
                            <Card key={index}
                                imgSrc={element.img}
                                name={element.name}
                                DOB={element.birthday}
                                occupation={element.occupation[0]}
                                status={element.status}
                                nickname={element.nickname}
                                portrayed={element.portrayed}
                                season={element.appearance[0]}
                            />
                        </>)
                    })}
                </div>
            </section>
        </>
    )
}

export default Character
