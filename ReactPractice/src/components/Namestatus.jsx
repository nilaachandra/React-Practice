import React,{useState} from "react";

const Namestatus = () => {
    const [name,setName] = useState("");
    const [age, setAge] = useState(0);
    const [isLoggedIn, setLoginState] = useState(false);

    const updateName = () => {
        setName("Nilaacodesigns")
    }

    const updateAge = () => {
        setAge(age + 1)
    }   
    const toggleLoginState = () => {
        setLoginState(!isLoggedIn);
    }
    return (
        <div>
            
            <p>Name: {name} </p>
            <button onClick={updateName} className="border border-black">Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge} className="border border-black">Set Age</button>
            <p>Is Logged In ? : {isLoggedIn ? "yes" : "No"}</p>
            <button onClick={toggleLoginState} className="border border-black">Change status</button>
        </div>
    )
}
export default Namestatus;