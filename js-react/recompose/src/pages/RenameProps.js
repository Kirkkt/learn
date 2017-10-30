import React from "react"
import { defaultProps, renameProps, compose } from "recompose"

const App = (props) => (
  <div>
    <h1>
      new value is {props.anotherCount} and {props.anotherName}
    </h1>
    <h1>
      old value is {props.count} and {props.name}
    </h1>
    {console.log(JSON.stringify(props, null, 2))}
  </div>
)

export default compose(
  defaultProps({
    count: 2,
    name: "Kirk",
  }),
  renameProps({
    count: "anotherCount",
    name: "anotherName",
  }),
)(App)
