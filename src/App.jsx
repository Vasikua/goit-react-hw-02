
import './App.css'
import Description from './components/description/Description'
import Options from './components/options/Options'
import Feedback from './components/feedback/Feedback'

function App() {
  const feedback = {
	good: 0,
	neutral: 0,
	bad: 0
}
  return (
    <>
      <Description />
      <Options data = {feedback} /> 
      <Feedback data = {feedback} />      
    </>
  )
}

export default App
