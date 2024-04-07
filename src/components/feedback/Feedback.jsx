
import css from "./Feedback.module.css"
export default function Feedback({ good, bad, neutral }) {
    
 const total = good + bad + neutral;
    const positivFeedBack = Math.round((good / total) * 100);
    
    return (
        <ul className={css.list}>
            {total !== 0 ? (
                <>
                    <li className = {css.item}>Good: {good}</li>
                    <li className = {css.item}>Neutral: {neutral}</li>
                    <li className = {css.item}>Bad: {bad}</li>
                    <li className = {css.item}>Total: {total}</li>
                    <li className = {css.item}>Positiv: {positivFeedBack}%</li>
                </>
            ) : (
                <li className = {css.item}>No feedback yeat</li>
            )}
        </ul>
    );
}
