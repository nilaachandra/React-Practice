import React from 'react'
import './App.css'
import Counter from './components/Counter'
import HeightWidth from './components/HeightWidth'
import DigitalClock from './components/DigitalClock'
import UseRefHook from './components/UseRefHook'
import UseRefHook2 from './components/UseRefHook2'

const App = () => {
  return (
    <>
      <h1 className='ml-4 text-xl font-bold text-blue-900 uppercase'>Welcome to useEffect learn and practice</h1>
      <Counter/>
      <HeightWidth/>
      <DigitalClock/>
      <UseRefHook/>
      <UseRefHook2/>
    </>
  )
}

export default App
