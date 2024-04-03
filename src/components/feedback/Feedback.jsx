export default function Feedback({ data: { good, neutral, bad } }) {
    const total =  good  +  neutral   +  bad;
    const positivFeedBack = Math.round((good / total) * 100);
    return <>
        <p>Good: { good}</p>
        <p>Neutral: {neutral }</p>
        <p>Bad: { bad}</p>
        <p>Total: {total}</p>
        <p>Positiv: {positivFeedBack}%</p>
    </>
}
