const App = () => {

  return (
    <div>
      <Header course='fullstack ' />
      <Content part1='course info' />
      <Total exercises='4'/>
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>Your course is : {course}</h1>
  )
}

const Content = ({ part1 }) => {
  return (
    <div> 
      <Part part='part1' exercises='apps'/>
      <Part part='part2' exercises='fun'/>
      <Part part='part3' exercises='learning'/>
    </div>
  )
}

const Total = ({ exercises }) => {
  return (
    <p>Your total exercises are {exercises}</p>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}
export default App

