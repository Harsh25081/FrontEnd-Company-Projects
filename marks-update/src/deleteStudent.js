import {useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

const DeleteStudent = () => { 
    let navigate=useNavigate();
    let [name, setName] = useState("");
    let obj = {name}
    let token = localStorage.getItem("Token")
   

  const deleteStudentdetails = (e) => {
    let body = obj
      const api = `http://localhost:5000/deletestudent`;
      axios({method:'delete',
      url:api,headers:{'x-api-key':token},data:body})
      .then((res)=>{ alert("deleted Successfully");navigate('/homepage');console.log(res.data.data)})
      .catch((err)=> console.log(err.message))
      e.preventDefault();

  };

  return (
    <div>
      <h1>Delete Student</h1>
      <form onSubmit={(e)=>{deleteStudentdetails(e);}}>
        <label>Name<input required
            onChange={(e) => {setName(e.target.value);}}></input></label><br />
      <button>Delete</button>
    </form>
    </div>
  );
};

export default DeleteStudent;