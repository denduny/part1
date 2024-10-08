import { useState } from 'react'


const Quote = ({selected}) => {
  return (<div> {selected} </div>)
}

const Vote = ({votes}) => {
  return (<div> Votes {votes} </div>)
}

const Max = ({max, quote}) => {
  return (<div> 
    <p> Best Quote: {quote} </p>
    <p> Max Score: {max} </p> 
    </div>)
}




// const History = (props) => { 
 
//   if (props.allClicks.length === 0){
//   return (
//     <div> the app is used by pressing the buttons </div> 
//   )
// }
// return (
//   <div> button press history: {props.allClicks.join} </div> 
// )
// } 

// const StatisticsLine = ({title, value}) => {
//   return <p> {title}: {value} </p>  
// }
// const Statistics = ({average_count, total, clicks, allClicks}) => {
//   console.log(total.length)
//   if (allClicks.length === 0){

//     return(
//       <div> <p> No feedback given. </p> </div> 
//     )}

//   return (
//     <div>

//      <tr> <td> <StatisticsLine title = "good" value={clicks.good}/> </td> </tr>
//      <tr> <td> <StatisticsLine title = "bad" value={clicks.bad}/> </td> </tr>
//      <tr><td> <StatisticsLine title = "neutral" value={clicks.neutral}/> </td> </tr>
//      <tr> <td>  <StatisticsLine title = "total" value={total}/> </td> </tr>


//     <History allClicks = {allClicks}/>
//     <p> {allClicks.join('')} </p> 
//     Average Score: {average_count/total} 
//     </div>

//   )
//   }


const Button = ({onClick, text}) => <button onClick = {onClick}> {text} </button>

const App = () => { 
  // setting the variables that change

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [quoteScore, setScore] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4:0, 5:0, 6:0, 7:0})

  let maxIndex = null;
  let maxScore = -Infinity;

  for (let key in quoteScore) {
    const score = quoteScore[key];
    if (score > maxScore) {
      maxScore = score;
      maxIndex = key;
    }
  }

  const handleVote = () => {
    const updatedVote = quoteScore[selected] + 1 
    console.log(updatedVote)
    setScore({...quoteScore, [selected]: updatedVote})

    
  }
  const handleRandomClick = () => {
    const updatedRandom = getRandomInt(0,8)
    setSelected(updatedRandom)
}
  
  
  


  // handles neutral click 

  // const handleNeutralClick = () => {
  //   const updatedNeutral = clicks.neutral +1 
  //   setClicks({...clicks, neutral: updatedNeutral})
  //   setAll(allClicks.concat('N'))
  //   setTotal(clicks.good + clicks.bad + updatedNeutral)

  // }

  // const handleBadClick = () => {
  //   const updatedBad = clicks.bad +1 
  //   const updatedAverage = average_count - 1
  //   setClicks({...clicks, bad: updatedBad})
  //   setAll(allClicks.concat('B'))
  //   setTotal(clicks.good + updatedBad + clicks.neutral)
  //   setAverage(updatedAverage)


    

  
  return (
    <div>
      <header> Quote </header>
      <button onClick = {handleRandomClick}> Next Anecdote </button>
      <button onClick = {handleVote}> Vote </button>
      <Quote selected = {anecdotes[selected]}/>
      <Vote votes = {quoteScore[selected]}/>
      <Max max = {maxScore} quote = {anecdotes[maxIndex]}/>
    </div>

      /* <button onClick={handleGoodClick}>Good </button>
      <button onClick={handleBadClick}> Bad </button>
      <button onClick={handleNeutralClick}> Neutral </button> */

      /* <Statistics average_count={average_count} total = {total} clicks = {clicks} allClicks = {allClicks}/> */
  )
}


export default App