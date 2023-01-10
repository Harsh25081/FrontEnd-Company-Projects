import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios";

const UserRegister = ()=>{
    let [name,setName] = useState("");
    let [password,setPassword] = useState("");

    let navigate = useNavigate();
    const handleSubmit = (event)=>{
            axios.post("http://localhost:5000/register",{name,password})
            .then((response)=>console.log("response",response))
            .catch((err)=>console.log(err.message))
            event.preventDefault();
            alert("Registeration Successful")
            navigate("/")                       
    }
    return (
        
        <div >
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h1>Registeration Form</h1>
                <div className="mb-3">
                    <label>Name : </label>
                    <input type={"text"} required onChange={(e)=>{setName(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>Password : </label>
                    <input type={"text"} required onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <button>Register</button>
            </form>
        </div>
    )
}

export default UserRegister