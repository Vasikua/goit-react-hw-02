
import './App.css'
import Description from './components/description/Description'
import Options from './components/options/Options'
import Feedback from './components/feedback/Feedback'
import { useEffect, useState } from 'react'

function App() {
    const getInitialValues = () => {
    const storageValues = localStorage.getItem("values");
      return storageValues !== null ?
        JSON.parse(storageValues)
        :
        {
        good: 0,
        bad: 0, 
        neutral: 0
        };
    }
 
  const [values, setValues] = useState(getInitialValues)

  const updateFeedback = (key) => {
    key === "resetAll" ?
      setValues({
        good: 0,
        bad: 0, 
        neutral: 0
      })
      :
      setValues({
        ...values,
        [key]: values[key] + 1
      });
  }

  useEffect(() => {
    localStorage.setItem('values', JSON.stringify(values));
  }, [values]);

    return (
      <>
        <Description />
        <Options updateFeedback={updateFeedback} getInitialValues = {getInitialValues} />
        <Feedback good = {values.good} bad = {values.bad} neutral = {values.neutral} />
      </>
    )
  }


export default App
