import React from "react"
import { defaultProps } from "recompose"

const App = (props) => (
  <div>
    <h1>
      defaultProps passes in a prop called count whose value is {props.count}
    </h1>
    <p>
    {console.log(`The entirety of props is ${JSON.stringify(props, null, 2)}`)}
    </p>
  </div>
)

const enhance = defaultProps({
  count: 2
})

export default enhance(App)