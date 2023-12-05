import React, { useEffect, useState } from 'react'

export default function users () {
  const [user, setUser] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => setError('error fetching user'))
  }, [])

  console.log(user)
  
  return (
    <div>
      <div>
        <h1>Users</h1>
        {error && <p>{error}</p>}
        <ul>
          {user?.map(user => (
            <li key={user?.id}>{user?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
