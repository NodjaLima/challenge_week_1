import './App.css'

import { useState, useEffect, useContext } from 'react'

import Form from './components/form/form'
import Header from './components/header/header'
import SectionData from './components/section_data/section_data'
import Text from './components/text/text'
import { getStudent, postStudent } from './requests/request'
import { StudentContext } from './context/studentContext'

function App() {

  const [name, setName] = useState('')
  const [turma, setTurma] = useState('')
  const [age, setAge] = useState('')
  const { student, setStudent } = useContext(StudentContext)
  const [control, setControl] = useState(0)

  const get = async () => {
    const Students = await getStudent()
    setStudent(Students)
  }

  useEffect(()=> {
    get()
  }, [student] )

  const handleClick = (e) => {
    e.preventDefault()
    const newStudent = {
      name_student: name,
      class_student: turma,
      age_student: parseInt(age)
    }
    postStudent(newStudent).then((res) => {
      alert("Cadastro realizado com sucesso")
    }).catch((e) => {
      alert('Verifique os dados. Cadastro não realizado!')
    })
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
