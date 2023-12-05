import React, { useState } from 'react'

const jobLocations = [
  {
    id: 1,
    value: 'Indore'
  },
  {
    id: 2,
    value: 'Pune'
  },
  {
    id: 3,
    value: 'Mumbai'
  },
  {
    id: 4,
    value: 'Noida'
  },
  {
    id: 5,
    value: 'Delhi'
  }
]

export default function Form () {
  const [formData, setFormData] = useState({
    name: '',
    lname: '',
    email:'',
    bio: '',
    phone:'',
    job_loc: ''
  })
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    fetch('http://localhost:3004/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData
    })
  }
  return (
    <>
      <div data-testid='parent-div'>
        <h1>Job Applicattion Form</h1>
        <h2> Section 1</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <img
              src='https://cdn-icons-png.flaticon.com/512/666/666201.png'
              alt='user_icon'
            />
          </div>
          <div>
            <p style={{ color: 'red' }}>All fields are mandatory *********</p>
          </div>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              placeholder='Enter First Name'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='lname'>Last Name:</label>
            <input
              type='text'
              id='lname'
              name='lname'
              placeholder='Enter Last Name'
              value={formData.lname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter Email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='phone'>Phone:</label>
            <input
              type='text'
              id='phone'
              name='phone'
              placeholder='Enter Phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='bio'>Bio:</label>
            <input
              type='text'
              name='bio'
              id='bio'
              value={formData.bio}
              placeholder='Enter Bio'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='job-location'>Job Location:</label>
            <select name='job_loc' id='job-location' onChange={handleChange}>
              {jobLocations?.map(opt => (
                <option key={opt.id} value={opt.value}>
                  {opt.value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor=''></label>
            <input type='checkbox' id='terms' />
            Accept terms and Condtions.
          </div>
          <div>
            <span title='check_1'>Please mark the CheckBox</span>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
