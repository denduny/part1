import { useState } from 'react'

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

const StatisticsLine = ({title, value}) => {
  return <p> {title}: {value} </p>  
}
const Statistics = ({average_count, total, clicks, allClicks}) => {
  console.log(total.length)
  if (allClicks.length === 0){

    return(
      <div> <p> No feedback given. </p> </div> 
    )}

  return (
    <div>

     <tr> <td> <StatisticsLine title = "good" value={clicks.good}/> </td> </tr>
     <tr> <td> <StatisticsLine title = "bad" value={clicks.bad}/> </td> </tr>
     <tr><td> <StatisticsLine title = "neutral" value={clicks.neutral}/> </td> </tr>
     <tr> <td>  <StatisticsLine title = "total" value={total}/> </td> </tr>


    <History allClicks = {allClicks}/>
    <p> {allClicks.join('')} </p> 
    Average Score: {average_count/total} 
    </div>

  )
  }


const Button = ({onClick, text}) => <button onClick = {onClick}> {text} </button>

const App = () => { 
  // setting the variables that change
  const Display = ({counter}) => <div> {counter} </div>
 
 

   


  
  const [clicks, setClicks] = useState({good: 0, bad: 0, neutral: 0})

  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const [average_count, setAverage] = useState(0)

  
  const handleGoodClick = () => {
    const updatedGood = clicks.good +1
    const updatedAverage = average_count + 1
    console.log(updatedAverage)
    setClicks({...clicks, good: updatedGood})
    setAll(allClicks.concat('G'))
    setTotal(updatedGood + clicks.bad + clicks.neutral)
    setAverage(updatedAverage)
  }

  // handles neutral click 

  const handleNeutralClick = () => {
    const updatedNeutral = clicks.neutral +1 
    setClicks({...clicks, neutral: updatedNeutral})
    setAll(allClicks.concat('N'))
    setTotal(clicks.good + clicks.bad + updatedNeutral)

  }

  const handleBadClick = () => {
    const updatedBad = clicks.bad +1 
    const updatedAverage = average_count - 1
    setClicks({...clicks, bad: updatedBad})
    setAll(allClicks.concat('B'))
    setTotal(clicks.good + updatedBad + clicks.neutral)
    setAverage(updatedAverage)


    

  }
  
  return (
    <div>
      <header> Feedback </header>
      <p> Testing </p>
      
      <button onClick={handleGoodClick}>Good </button>
      <button onClick={handleBadClick}> Bad </button>
      <button onClick={handleNeutralClick}> Neutral </button>
      <Statistics average_count={average_count} total = {total} clicks = {clicks} allClicks = {allClicks}/>


    </div>
  )
}


export default App