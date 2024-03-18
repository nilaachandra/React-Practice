import React, {useState} from 'react'
import {useDispatch} from 'react-dom'
import {addTodo} from '../components/todoslice'
const Addtodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler}>
        <input type="text" name="" id="" value={input} placeholder='enter a todo' />
        <input type="submit" value="" />
    </form>
  )
}

export default Addtodo