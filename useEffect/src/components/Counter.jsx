import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `useEffect Count: ${count}`;
    }, [count])


    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

  return (
    <div className='p-4'>
        <h1>Counter: {count}</h1>
        <button className='border-black border p-2'
        onClick={increaseCount}> Add </button>
        <button className='border-black border p-2'
        onClick={decreaseCount}> Subtract </button>
    </div>
  )
}

export default Counter