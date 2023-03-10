import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Login = ()=>{
    let [name,setName]=useState("");
    let [password,setPassword]=useState("");
    let [token,setToken]=useState("");
    let [isError,setIsError]=useState("");
    let navigate = useNavigate();

    const userLogin = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:5000/login",{name,password})
            .then((response)=>{setToken(response.data.data)})
            .catch((err)=>{setIsError(err.message)})
    }

    return (
       <>
       <h2>Login</h2>
        <form onSubmit={(event)=>userLogin(event)}>
        {token!==""&&<p>{localStorage.setItem('token', token)}</p>}
        {token!==""&&<p>{alert("Login Successful")}</p>}
        {token!==""&&<p>{navigate('/homepage')}</p>}
        {isError!==""&&<p>{isError}</p>}

        <div className="mb-3">
                    <label>Name : </label>
                    <input type={"text"} required onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
        <div className="mb-3">
                    <label>Password : </label>
                    <input type={"text"} required onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <button>Login</button>
        </form>
        
       </>
    )
}

export default Login