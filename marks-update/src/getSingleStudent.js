import {useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

const GetStudent = () => { 
    let navigate=useNavigate();
    let [name, setName] = useState("");
    let obj = {name}
    let token = localStorage.getItem("Token")
   

  const getStudentdetails = (e) => {
    let body = obj
      const api = `http://localhost:5000/getstudent`;
      axios({method:'get',
      url:api,headers:{'x-api-key':token},data:body})
      .then((res)=>{ alert("Successfull");navigate('/homepage');console.log(res.data.data)})
      .catch((err)=> console.log(err.message))
      e.preventDefault();

  };

  return (
    <div>
      <h1>Get Student Details</h1>
      <form onSubmit={(e)=>{getStudentdetails(e);}}>
        <label>Name<input required
            onChange={(e) => {setName(e.target.value);}}></input></label><br />
      <button>Get</button>
    </form>
    </div>
  );
};

export default GetStudent;