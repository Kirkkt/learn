import React from "react"
import { withState } from "recompose"

const App = ({ count, setCount }) => (
  <div>
    <h1>
      withState passes in a prop called count whose value is {count}, and an updater called setCount
    </h1>
    <div>
      <button onClick={() => setCount(count + 1)}>click me to increase count simple</button>
    </div>
    <div>
      <button onClick={() => setCount(count - 1)}>click me to decrease count simple</button>
    </div>
    <div>
      <button onClick={() => setCount(count => count + 1)}>click me to increase count functional</button>
    </div>
    <div>
      <button onClick={() => setCount(count => count - 1)}>click me to decrease count functional</button>
    </div>
  </div>
)

const enhance = withState('count', 'setCount', 100)

export default enhance(App)
