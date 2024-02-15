import React from 'react'
import './App.css'
import Counter from './components/Counter'
import HeightWidth from './components/HeightWidth'

const App = () => {
  return (
    <>
      <h1 className='ml-4 text-xl font-bold text-blue-900 uppercase'>Welcome to useEffect learn and practice</h1>
      <Counter/>
      <HeightWidth/>
    </>
  )
}

export default App
