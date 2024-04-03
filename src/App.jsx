
import './App.css'
import Description from './components/description/Description'
import Options from './components/options/Options'
import Feedback from './components/feedback/Feedback'

function App() {
   const good = JSON.parse(window.localStorage.getItem("good")); 
   const bad = JSON.parse(window.localStorage.getItem("bad"));
  const neutral = JSON.parse(window.localStorage.getItem("neutral"));
  
  console.log(good.clicksGood, bad.clicksBad, neutral.clicksNeutral);
  const feedback = {
	good:10,
	neutral:30,
	bad:20
  }
 
    feedback.good = good.clicksGood;
  
 
  return (
    <>
      <Description />
      <Options data = {feedback} /> 
      <Feedback data = {feedback} />      
    </>
  )
}

export default App
