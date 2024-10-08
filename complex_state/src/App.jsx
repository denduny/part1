import { useState } from 'react'

const Display = ({counter}) => <div> {counter} </div>
const Button = ({onClick, text}) => <button onClick = {onClick}> {text} </button>
const History = (props) => { 
  if (props.allClicks.length === 0){
    return (
      <div> the app is used by pressing the buttons </div> 
    )
  }
  return (
    <div> button press history: {props.allClicks.join} </div> 
  )
}
const App = () => { 
  const [clicks, setClicks] = useState({good: 0, bad: 0, neutral: 0})

  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)
  
  const handleGoodClick = () => {
    const updatedGood = clicks.left +1
    setClicks({...clicks, Good: updatedGood})
    setAll(allClicks.concat('Good'))
    setTotal(clicks.good + updatedBad + updatedNeutral)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = clicks.neutral +1 
    setClicks({...clicks, neutral: updatedNeutral})
    setAll(allClicks.concat('neutral'))
    setTotal(updatedBad + clicks.good + clicks.neutral) 

  }
    const handleBadClick = () => {
    const updatedBad = clicks.bad +1 
    setClicks({...clicks, bad: updatedBad})
    setAll(allClicks.concat('Bad'))
    setTotal(updatedBad + clicks.good + clicks.neutral) 

  }
  
  
  return (
    <div>
      <header> Feedback </header>
      <p> Testing </p>
      {clicks.good}
      <button onClick={handleGoodClick}>Good </button>
      <button onClick={handleBadClick}> Bad </button>
      <button onClick={handleNeutralClick}> Neutral </button>
      {clicks.neutral}
      {clicks.bad}
      <History allClicks = {allClicks}/>

      <p> {allClicks.join('')} </p> 
      <p> Total {total} </p>
    </div>
  )
}


export default App