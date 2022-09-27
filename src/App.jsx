import './App.css'

import { useState, useEffect } from 'react'

import Form from './components/form/form'
import Header from './components/header/header'
import SectionData from './components/section_data/section_data'
import Text from './components/text/text'
import Data from '../data/data'

function App() {

  const [name, setName] = useState('')
  const [turma, setTurma] = useState('')
  const [age, setAge] = useState('')
  const [control, setControl] = useState(0)

  useEffect(()=> {}, [Data] )

  const handleClick = (e) => {
    e.preventDefault()
    const newData = {
      id: Data.length + 1,
      name: name,
      class: turma,
      age: age
    }
    Data.push(newData)
    setControl(control + 1)
    handleInputValue()
  }

  const handleInputValue = () => {
    setName('')
    setTurma('')
    setAge('')
  }

  return (
    <div className="App">
      <Header />
      <Form 
        onBlurName={(e) => {
          setName(e.target.value)
        }}
        valueName={name}
        onBlurClass={(e) => {
          setTurma(e.target.value)
        }}
        valueClass={turma}
        onBlurAge={(e) => {
          setAge(e.target.value)
        }}
        valueAge={age}
        onClick={(e) => {
          handleClick(e)
          }}/>
      <Text />
      <SectionData />      
    </div>
  )
}

export default App
