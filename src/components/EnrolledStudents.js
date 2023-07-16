import StudentDetails from './StudentDetails'
import './EnrolledStudents.css'

const EnrolledStudents = ({ enrolledStudents }) => {
    // console.log(enrolledStudents)
    if(enrolledStudents.length !== 0){
      return (
        <div className="displaySection__enrolled">
          <h2 className="enrolled__heading">Enrolled Students</h2>
          <div className="enrolled__list">
            {
              enrolledStudents.map(student => {
                return <StudentDetails details={student} key={student.id}/>
              })
            }
          </div>
        </div>
      )
    }
    else {
      const myStyle = {
        backgroundColor: "white",
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem"
      }
      return (
        <div className="displaySection__enrolled" style={myStyle}>
          <p>No students enrolled yet</p>
        </div>
      )
    }
}

export default EnrolledStudents