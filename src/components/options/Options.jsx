 
export default function Options({ updateFeedback,  getInitialValues}) {
    
         return <>
            <button onClick={() => updateFeedback("good")} >Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
             { JSON.stringify(getInitialValues()) !== JSON.stringify({ good: 0, bad: 0, neutral: 0 }) ?
                 (<button onClick={() => updateFeedback("resetAll")}>Reset</button>)
                 :
                 (<button disabled ></button>)
             }
        </>
}