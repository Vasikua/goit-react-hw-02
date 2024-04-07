 import  css from "./Options.module.css"
export default function Options({ updateFeedback,  getInitialValues}) {
    
         return <div className={css.feedbackContainer}>
            <button className={css.feedbackBtn} onClick={() => updateFeedback("good")} >Good</button>
            <button className={css.feedbackBtn} onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={css.feedbackBtn} onClick={() => updateFeedback("bad")}>Bad</button>
             { JSON.stringify(getInitialValues()) !== JSON.stringify({ good: 0, bad: 0, neutral: 0 }) ?
                 (<button className={css.feedbackBtn} onClick={() => updateFeedback("resetAll")}>Reset</button>)
                 :
                 (<button className={css.feedbackOff} ></button>)
             }
        </div>
}