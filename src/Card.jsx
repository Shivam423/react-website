import React from 'react'

const Card = ({imgSrc,name,DOB,occupation,status,nickname,portrayed,season}) => {
    return (
        <>
            <div className="card">
                <img src={imgSrc} alt="" />
                <h3>Name - {name}</h3>
                <p>Date of Birth: {DOB}</p>
                <p>Occupation - {occupation}</p>
                <p>Status - {status}</p>
                <p>Nickname - {nickname}</p>
                <p>portrayed - {portrayed}</p>
                <p>Seasons - {season}</p>
            </div>
        </>
    )
}

export default Card
