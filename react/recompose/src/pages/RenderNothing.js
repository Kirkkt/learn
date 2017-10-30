import React from "react"
import { renderNothing, branch } from "recompose"

const RecordsListBase = ({ records }) => (
  <ul>
    <li>the branch test function evaluates to true</li>
    <li><ol>
      {records.map((record, index) => <li key={index}>{record}</li>)}
    </ol></li>
  </ul>
)
const RecordsList = branch(
  ({ records }) => !records || records.length === 0,
  renderNothing
)(RecordsListBase)

const App = () => (
  <div>
    <h1>renderNothing works very well with branch. As the name suggests, it renders nothing.</h1>
    <span>you do not see this:</span><RecordsList records={[]} />
    <br/>
    <span>but you see this:</span><RecordsList records={["a", "b", "c"]} />
    <br/>
  </div>
)

export default App
