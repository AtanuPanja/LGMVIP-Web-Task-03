import sampleUserImage from '../assets/sample_user.png'
import FormHTML from './FormHTML'
import './Form.css'

const Form = ({enrolledStudents,setEnrolledStudents}) => {
    const clearForm = (form) => {
      form.forEach((element,index) => {
        if(index <= 3) {
          element.value = ""
        }
        else if(index >= 4 && index <= 8) {
          if(element.checked) element.checked = false
        }
      })
    }
  
    const clearFormHandler = (event) => {
      event.preventDefault() // prevents the form submit action
      // console.dir(event.target.parentNode.parentNode)
      // console.log(Array.from(event.target.parentNode.parentNode))
      const form = Array.from(event.target.parentNode.parentNode)
      clearForm(form)
    }
    const submitFormHandler = (event) => {
      event.preventDefault() // prevents the reload action after submit
      const form = Array.from(event.target)
      // console.log(form)
  
      const arr = form.map((element,index) => {
        if (index >= 4 && index <= 8) {
          if (element.checked) return element.value
        }
        else if (index === 3) {
          return element.files[0]
        }
        else {
          return element.value
        }
        return undefined
      })
  
      // console.log(arr)
      let gender = ""
      if (arr[4] === "Male") gender = "Male"
      else if (arr[5] === "Female") gender = "Female"
  
      const skillsArr = arr.slice(6, 9).filter(element => element !== undefined)
      // console.log(arr[3])
      let image;
      if(arr[3].type.startsWith("image")) {
        image = URL.createObjectURL(arr[3])
      }
      else {
        image = sampleUserImage;
      }
      const obj = {
        id: enrolledStudents.length + 1,
        name: arr[0],
        email: arr[1],
        websiteLink: arr[2],
        image: image,
        gender: gender,
        skills: skillsArr.join(", ")
      }
      // console.table(obj)
        const searchStudent = enrolledStudents
        .filter(element => 
          (element.email === obj.email 
          || element.websiteLink === obj.websiteLink)
        )
        if(searchStudent.length !== 0) {
          alert("The student has already been enrolled")
        }
        else {
          setEnrolledStudents(enrolledStudents.concat(obj))
          clearForm(form)
        }
        // console.log(searchStudent)
    }
  
    return (
      <FormHTML submitFormHandler={submitFormHandler} clearFormHandler={clearFormHandler}/>
    )
}

export default Form