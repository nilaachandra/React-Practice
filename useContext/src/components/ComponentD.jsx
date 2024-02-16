import React from 'react'
import { useContext } from 'react'
import { userContext } from './ComponentA'

function ComponentD() {
  const userName = useContext(userContext);
  return (
    <div className='border-2 border-black p-4 w-40'>
      <h1>ComponentD</h1>
      <h2>Bye {userName}</h2>
    </div>
  )
}

export default ComponentD