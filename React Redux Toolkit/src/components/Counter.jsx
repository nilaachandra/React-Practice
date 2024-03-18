import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/slices/storeIndex'


const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => {dispatch(increment())}}>Increase</button>
        <button onClick={() => {dispatch(decrement())}}>Decrease</button>
    </div>
  )
}

export default Counter