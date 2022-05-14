import React, { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  /*setTimeout(
    () => setCounter(counter + 1),
    1000
  )*/
  
  const decreaseByZero = () => setCounter(counter - 1)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  const handleClick = () => {
    console.log('clicked')
  }

  console.log('rendering...', counter)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={decreaseByZero} text='minus' />
      <Button onClick={increaseByOne} text='plus'/>
      <Button onClick={setToZero} text='zero' />
    </div>
  )
}

export default App