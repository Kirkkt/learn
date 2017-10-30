import React from "react"
import { mapProps, withState, compose } from "recompose"

const IncreaseButton = ({ increase }) => (
  <div>
    <button onClick={increase}>click me to increase count</button>
  </div>
)

const DecreaseButton = ({ decrease }) => (
  <div>
    <button onClick={decrease}>click me to decrease count</button>
  </div>
)

const App = ({ count, increase, decrease }) => (
  <div>
    <h1>
      {count}
    </h1>
    <p>mapProps transforms props into a new set of props</p>
    <IncreaseButton increase={increase}/>
    <DecreaseButton decrease={decrease}/>
  </div>
)

export default compose(
  withState('count', 'setCount', 100),
  mapProps(({ setCount, ...rest }) => ({
    increase: () => setCount(n => n + 1),
    decrease: () => setCount(n => n - 1),
    ...rest
  }))
)(App)
