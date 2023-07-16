import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import EnrolledStudents from './components/EnrolledStudents'
import DisplaySection from './components/DisplaySection'

function App() {
  const [enrolledStudents, setEnrolledStudents] = useState([])
  return (
    <>
      <Header />
      <DisplaySection>
        <Form enrolledStudents={enrolledStudents} setEnrolledStudents={setEnrolledStudents}/>
        <EnrolledStudents enrolledStudents={enrolledStudents} />
      </DisplaySection>
    </>
  )
}

export default App