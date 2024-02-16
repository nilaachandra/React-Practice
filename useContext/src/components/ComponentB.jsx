import React from 'react'
import ComponentC from './ComponentC'
function ComponentB() {
  return (
    <div className='border-2 border-black p-4 w-60'>
      <h1>ComponentB</h1>
      <ComponentC/>
    </div>
  )
}

export default ComponentB