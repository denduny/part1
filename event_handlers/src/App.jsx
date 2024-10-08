import { useState } from 'react'

const Display = ({counter}) => <div> {counter} </div>
const Button = ({onClick, text}) => <button onClick = {onClick}> {text} </button>

const App = () => {

  const [ counter, setCounter ] = useState(0)
  console.log('rendering...', counter)
  
  const increaseByOne = () => {
    console.log('increasing value before', counter)
    setCounter(counter +1)
  }
  
  
  const decreaseByOne = () => {
    console.log('decreasing value before', counter)
    setCounter(counter-1)
  }

  
  const setToZero = () => {
  setCounter(0)
  console.log('setting value to zero before', counter)
}



  return (
    <div>
      <Display counter = {counter}/>

      <Button onClick= {increaseByOne} text = 'plus'  />
      <Button onClick= {decreaseByOne} text = 'minus'/>
      <Button onClick = {setToZero} text = 'zero'/>

    </div>
  )
}


export default App