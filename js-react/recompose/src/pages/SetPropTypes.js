import React from "react"
import PropTypes from "prop-types"
import { setPropTypes, compose, withState } from "recompose"

const Component = setPropTypes({
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
})(({value, onChange}) => (
  <input type="text" value={value} onChange={onChange} />
))

const App = ({ value, setValue }) => (
  <div>
    <Component value={value} onChange={event => setValue(event.target.value)} />
    <div>
      {value}
    </div>
  </div>
)

export default compose(
  withState("value", "setValue", ""),
  setPropTypes({
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
  })
)(App)

