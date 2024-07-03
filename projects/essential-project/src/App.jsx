import { useState } from 'react'
import Header from './components/Header.jsx'
import InputGroup from './components/InputGroup.jsx'
import Result from './components/Result.jsx'

function App() {

  const [values, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = values.duration > 0;

  const handleOnChanges = (id, value) => {
    setValues(previousValues => {
      return {
        ...previousValues,
        [id]: +value
      }
    });
  }

  return (
    <>
      <Header />
      <InputGroup onChanges={handleOnChanges} values={values} />
      {!inputIsValid && <p>Invalid data</p>}
      {inputIsValid && <Result values={values} />}
    </>
  )
}

export default App
