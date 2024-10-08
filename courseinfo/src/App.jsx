const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
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
      <Part part='part3' exercises='learnin'/>
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

