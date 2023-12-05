import React from 'react'

export default function Application () {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>Get By Text Query</p>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='Enter Full Name' value={"Pradeep"} onChange={() => {}} />
        </div>
        <div>
          <label htmlFor='bio'>Bio</label>
          <textarea name='text' id='bio' />
        </div>
        <div>
            <div data-testid='custom-testid'>Custom test Id</div>
            <span title='close'>X</span>
            <img src="https://image-123.jpg" alt="laptop image" />
        </div>
        <div>
          {/* <label htmlFor='job-location'>Job Location</label> */}
          <label htmlFor='job-location'>Name</label>
          <select id='job-location'>
            <option value=''>Select a country</option>
            <option value='US'>United State</option>
            <option value='IND'>India</option>
            <option value='AUS'>Australia</option>
            <option value='RUS'>Russia</option>
          </select>
        </div>
        <div>
          <label>
            <input type='checkbox' id='terms' />I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}
