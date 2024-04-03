import { useState, useEffect } from 'react'
export default function Options() {

    const [clicksGood, setClicksGood] = useState(0);
    const [clicksBad, setClicksBad] = useState(0);
    const [clicksNeutral, setClicksNeutral] = useState(0);
useEffect(() => {
    window.localStorage.setItem("good", JSON.stringify({clicksGood}));
  }, [clicksGood]);
    useEffect(() => {
    window.localStorage.setItem("bad",JSON.stringify({clicksBad}) );
    }, [clicksBad]);
    useEffect(() => {
    window.localStorage.setItem("neutral", JSON.stringify({clicksNeutral}));
    }, [clicksNeutral]);
    
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
        setClicksGood(0);
        setClicksBad(0);   
        setClicksNeutral(0);        
     };


    return <>
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
        <button onClick={handleClickReset}>Reset</button>
    </>
}