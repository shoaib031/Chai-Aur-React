import React, { useState } from 'react'

const CounterProject = () => {

  let [counter, setCounter] = useState(15)
  const Increase = () => {
    setCounter(counter + 1)
  }
  const Decrease = () => {
setCounter(counter - 1)
  }
  return (
    <div>
      <h1>Counter Value {counter}</h1>
      <button onClick={Increase}>Increase</button>
      <br />
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default CounterProject