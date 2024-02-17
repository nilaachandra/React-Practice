import React,{useRef,useEffect,useState, Component} from 'react'

const UseRefHook = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
    });
    
    const handleClick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
    }
    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "red";
    }


  return (
    <div>
        <h1>The next section shows the example of useRef Hook</h1>
        <button onClick={handleClick1} className='border-black border p-2'>Click Me</button>
        <input ref={inputRef1} className='outline-black outline'/>
        <button onClick={handleClick2} className='border-black border p-2'>Click Me</button>
        <input ref={inputRef2} className='outline-black outline'/>
    </div>
  )
}

export default UseRefHook