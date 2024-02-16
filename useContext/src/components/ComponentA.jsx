import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const userContext = createContext();

function ComponentA() {
  const [userName, setUserName] = useState("Nilaacodes");

  return (
    <div className='border-2 border-black p-4 w-80'>
      <h1>ComponentA</h1>
      <h1>Hello {userName}</h1>
      <userContext.Provider value={userName}>
        <ComponentB/>
      </userContext.Provider>
    </div>
  )
}

export default ComponentA