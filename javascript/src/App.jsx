const App = (props) => {

  const course = {
    course_name: 'Half stack application development', // Fixed typo and added comma
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.course_name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}


const Content = ({ parts }) => {
  return (
    <div> 
      <Part part={parts[0].name} exercises={parts[0].exercises}/>
      <Part part={parts[1].name} exercises={parts[1].exercises}/>
      <Part part={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>Your course is : {course}</h1>
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
