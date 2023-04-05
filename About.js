import React from 'react'
import { useState } from 'react'

const AboutPage = () => {
  return (
    <main>
   <h2>This is the About Page</h2> 
   <PreviewComp />
    </main>
  )
}

export default AboutPage

const PreviewComp = () => {
  const [count,setCount] = useState(0);
  const [name,setName] = useState("chris");

//   setTimeout(
//     () => setCount(Count + 1), 1000
//   )
//   return(
//     <h1>initialState</h1>

//   )
// }

const addCount= () => {
  setCount(count +1)
}

const subtractCount = () => {
  setCount(count -1)
}

const resetCount = () => {
  setCount(0)
}
const Change = () => {
  setName("Joe")
}

return (
  <>
  <h1>{name}</h1>
  <Display count={count} />
  <Button text="PLUS" handleClick={addCount} /> 
  <Button text="RESET" handleClick={resetCount}/>
  <Button text="MINUS" handleClick={subtractCount} />
  <Button text="CHANGE" handleClick={Change}/>
  </>
)
}

const Display =(props) => {
  return (
    <div>{props.count}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.
    text} </button>
  )
}

const Days = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}