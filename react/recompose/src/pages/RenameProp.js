import React from "react"
import { defaultProps, renameProp, compose } from "recompose"

const App = (props) => (
  <div>
    <h1>
      new value is {props.anotherCount}
    </h1>
    <h1>
      old value is {props.count}
    </h1>
    {console.log(JSON.stringify(props, null, 2))}
  </div>
)

export default compose(
  defaultProps({
    count: 2
  }),
  renameProp("count", "anotherCount")
)(App)
