import React, { useEffect, useState } from 'react'

export default function Skills({skills}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsLoggedIn(true), 1000)
    }, [])

  return (
    <>
        <ul>
            {
                skills?.map(skill => 
                    <li key={skill}>{skill}</li>
                )
            }
        </ul>
        {
            isLoggedIn ? (
                <button>Start Learning</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )
        }
    </>
  )
}
