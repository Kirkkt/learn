import React from "react"
import { lifecycle } from "recompose"

const App = () => (
  <div>
    <h1>lifecycle eliminates the need to create smart components only to enable lifecycle manipulation.</h1>
  </div>
)

export default lifecycle({
  componentWillMount() {
    alert('componentWillMount<br>')
  },
  componentDidMount() {
    alert('componentDidMount<br>')
  },
  componentWillReceiveProps(nextProps) {
    alert('componentWillReceiveProps' + JSON.stringify(nextProps))
  },
})(App)
