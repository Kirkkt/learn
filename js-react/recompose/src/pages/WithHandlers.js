import React from "react"
import { withState, compose, withHandlers } from "recompose"

const App = ({ value, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      withHandlers are expecially useful in forms. It passes in "handlers" in the forms of props attributes.
    </div>
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
)

export default compose(
  withState('value', 'updateValue', ''),
  withHandlers({
    onSubmit: ({ value }) => event => {
      event.preventDefault()
      alert(`Submitting value: ${value}`)
    },
    onChange: ({ updateValue }) => event => updateValue(event.target.value),
  })
)(App)
