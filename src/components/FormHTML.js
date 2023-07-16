import React from 'react'

const FormHTML = ({submitFormHandler,clearFormHandler})=> {
  return (
    <form className="displaySection__form" onSubmit={submitFormHandler}>
        <div className="formElement">
          <label htmlFor="nameInput">Name</label>
          <input className="formElement__text" id="nameInput" type="text" name="name" required/>
        </div>
        <div className="formElement">
          <label htmlFor="emailInput">Email</label>
          <input className="formElement__text" id="emailInput" type="email" name="email" required/>
        </div>
        <div className="formElement">
          <label htmlFor="websiteInput">Website</label>
          <input className="formElement__text" id="websiteInput" type="text" name="website" />
        </div>
  
        <div className="formElement">
          <label htmlFor="imageInput">Image</label>
          <input className="formElement__image" id="imageInput" type="file" name="image" accept=".jpeg, .png, .jpg, .webp" required/>
        </div>
        <div className="formElement">
          <span>Gender</span>
          <div className="formElement__radio">
            <div>
              <input type="radio" id="maleRadio" name="gender" value="Male" required/>
              <label htmlFor="maleRadio">Male</label>
            </div>
            <div>
              <input type="radio" id="femaleRadio" name="gender" value="Female" required/>
              <label htmlFor="femaleRadio">Female</label>
            </div>
          </div>
        </div>
        <div className="formElement">
          <span>Skills</span>
          <div className="formElement__checkbox">
            <div>
              <input type="checkbox" id="javaCheckbox" name="skills" value="Java" />
              <label htmlFor="javaCheckbox">Java</label>
            </div>
            <div>
              <input type="checkbox" id="htmlCheckbox" name="skills" value="HTML" />
              <label htmlFor="htmlCheckbox">HTML</label>
            </div>
            <div>
                <input type="checkbox" id="cssCheckbox" name="skills" value="CSS" />
                <label htmlFor="cssCheckbox">CSS</label>
            </div>
          </div>
        </div>
        <div className="btnGroup">
          <button className="btn btnSubmit">Submit</button>
          <button className="btn btnClear" onClick={clearFormHandler}>Clear</button>
        </div>
      </form>
  )
}

export default FormHTML
