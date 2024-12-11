import React from 'react';

const advices= [
    "work hard",
    "study hard",
    "be kind",
    "be patient",
]


const RandomAdvise=({onSelectAdvice})=>{
    const getRandomAdvice=()=>{
        const randomIndex=Math.floor(Math.random()*advices.length);
        return advices[randomIndex];
    }
    const handleClick=()=>{
        const advice=getRandomAdvice();
        onSelectAdvice(advice);

    }

    return(
        <>
        <button onClick={handleClick}>Generate Advice</button>
        </>
    )
}
export default RandomAdvise;