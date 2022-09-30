import './App.css'

import { useState, useEffect, useContext } from 'react'
import Modal from 'react-modal';

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
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalError, setModalError] = useState(false)


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
      setModalIsOpen(true)
    }).catch((e) => {
      setModalError(true)
    })
    handleInputValue()
  }

  const handleInputValue = () => {
    setName('')
    setTurma('')
    setAge('')
  }

  const handleModalIsClose = () => {
    setModalIsOpen(false)
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
      <Modal 
        isOpen={modalIsOpen}
        className='modalStyle'
        >
        <h2>Estudante cadastrado com sucesso</h2>
        <button className='buttonModal' onClick={handleModalIsClose}>Ok</button>  
      </Modal>
      <Modal 
        isOpen={modalError}
        className='modalStyle'
        >
        <h2>Verifique os dados. Cadastro não realizado!</h2>
        <button className='buttonModal' onClick={(e) => {setModalError(false)}}>Ok</button>  
      </Modal>

    </div>
  )
}

export default App
