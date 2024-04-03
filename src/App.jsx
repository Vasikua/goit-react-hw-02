import { useState } from 'react'
import './App.css'
import Description from './components/description/Description'
import Options from './components/options/options'
import Feedback from './components/feedback/Feedback'

function App() {
  
  return (
    <>
      <Description />
      <Options /> 
      <Feedback/>      
    </>
  )
}

export default App
