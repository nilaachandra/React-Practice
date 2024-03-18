import React from 'react'
import { useSelector } from 'react-redux'

const AnotherCounter = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <div>This is another Counter : {count}</div>
  )
}

export default AnotherCounter