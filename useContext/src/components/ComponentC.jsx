import React from 'react'
import ComponentD from './ComponentD'
import { useContext } from 'react'
import { userContext } from './ComponentA'


function ComponentC() {
  const userName = useContext(userContext);
  return (
    <div className='border-2 border-black p-4 w-50'>
      <h1>ComponentC</h1>
      <h2>Hi there again {userName}</h2>
      <ComponentD/>
    </div>
  )
}

export default ComponentC