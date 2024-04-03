import { useState, useEffect } from 'react'
export default function Options() {

    const [clicksGood, setClicksGood] = useState(0);
    const [clicksBad, setClicksBad] = useState(0);
    const [clicksNeutral, setClicksNeutral] = useState(0);

    
    const handleClickGood = () => {
        setClicksGood(clicksGood + 1); 
     };
    const handleClickNeutral = () => {
        setClicksNeutral(clicksNeutral + 1);
     };
    const handleClickBad = () => {
  setClicksBad(clicksBad + 1);
     };
    const handleClickReset = () => {
        setClicksGood(clicksGood (0));
        setClicksBad(clicksBad (0));   
        setClicksNeutral(clicksNeutral (0));        
     };


    return <>
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
        <button onClick={handleClickReset}>Reset</button>
    </>
}