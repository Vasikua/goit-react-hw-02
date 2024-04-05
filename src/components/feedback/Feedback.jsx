export default function Feedback({good, bad, neutral}) {
    
 const total = good + bad + neutral;
    const positivFeedBack = Math.round((good / total) * 100);
    
    return (
        <ul className="list">
            {total !== 0 ? (
                <>
                    <li className="item">Good: {good}</li>
                    <li className="item">Neutral: {neutral}</li>
                    <li className="item">Bad: {bad}</li>
                    <li className="item">Total: {total}</li>
                    <li className="item">Positiv: {positivFeedBack}%</li>
                </>
            ) : (
                <li className="item">No feedback yeat</li>
            )}
        </ul>
    );
}
