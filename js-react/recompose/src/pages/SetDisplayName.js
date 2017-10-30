import React from "react"
import { setDisplayName } from "recompose"

export default setDisplayName("App")(() => (
  <div>
    <h1>setDisplayName removes the last need to have a variable name for the React component</h1>
    <p>By default, an unnamed React component has a default name of <strong>Unknown</strong></p>
  </div>
))
