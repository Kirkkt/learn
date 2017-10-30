import React from "react"
import { renderComponent, branch } from "recompose"

const RecordsList = branch(
  ({ records }) => records && records.length > 0,
  renderComponent(({ records }) => (
    <ul>
      <li>the branch test function evaluates to true</li>
      <li><ol>
        {records.map((record, index) => <li key={index}>{record}</li>)}
      </ol></li>
    </ul>
  )),
  renderComponent(() => <ul><li>the branch test function evaluates to false. No records found</li></ul>)
)(() => <div/>)

const RecordsListWithDefault = branch(
  ({ records }) => records && records.length,
  renderComponent(({ records }) => (
    <ul>
      <li>the branch test function evaluates to true</li>
      <li><ol>
        {records.map((record, index) => <li key={index}>{record}</li>)}
      </ol></li>
    </ul>
  ))
)(() => <ul><li>the default rendering method is used when the branch test function evaluates to false. No records found</li></ul>)


const App = () => (
  <div>
    <h1>renderComponent works very well with branch, where based on the test function evaluation, different components are rendered</h1>
    <RecordsList records={[]} />
    <br/>
    <RecordsList records={["a", "b", "c"]} />
    <br/>
    <RecordsListWithDefault records={[]} />
    <br/>
    <RecordsListWithDefault records={["a", "b", "c"]} />
    <br/>
  </div>
)

export default App
