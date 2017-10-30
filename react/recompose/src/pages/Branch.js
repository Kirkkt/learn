import React from "react"
import { withState, withHandlers, branch, compose } from "recompose"

const IncreaseOrDecreaseButtonBase = ({ actionText, update }) => (
  <div>
    <button onClick={update}>click me to {actionText} count</button>
  </div>
)

const increaseEnhance = withHandlers({
  update: ({ setCount }) => () => setCount(n => n + 1)
})
const decreaseEnhance = withHandlers({
  update: ({ setCount }) => () => setCount(n => n - 1)
})

const IncreaseOrDecreaseButton = branch(
  ({ actionText }) => actionText === 'increase',
  increaseEnhance,
  decreaseEnhance
)(IncreaseOrDecreaseButtonBase)

const App = ({ count, setCount }) => (
  <div>
    <h1>
      count: {count}
    </h1>
    <p>
      branch applies different enhances based on whether the first test function evaluates to true or false
    </p>
    <IncreaseOrDecreaseButton setCount={setCount} actionText="increase" />
    <IncreaseOrDecreaseButton setCount={setCount} actionText="decrease" />
  </div>
)

export default compose(
  withState('count', 'setCount', 100),
)(App)
