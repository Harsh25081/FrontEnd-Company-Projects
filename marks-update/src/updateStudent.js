import {useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

const UpdateStudent = () => { 
    let navigate=useNavigate();
    let [name, setName] = useState("");
    let [subject, setSubject] = useState("");
    let [marks, setMarks] = useState("");
    
    let token = localStorage.getItem("Token")

    let obj = {name}
    if(subject==="Math"){obj.Math=marks}
    else if(subject==="Biology"){obj.Biology=marks}
    else if(subject==="Physics"){obj.Physics=marks}
    else if(subject==="Chemistry"){obj.Chemistry=marks}

  const UpdateStudentdetails = (e) => {
      let body = obj
      const api = `http://localhost:5000/updatestudent`;
      axios({method:'put',
      url:api,headers:{'x-api-key':token},data:body})
      .then((res)=>{ alert("Created Successfully");navigate('/homepage');console.log(res.data.data)})
      .catch((err)=> console.log(err.message))
      e.preventDefault();

  };

  return (
    <div>
      <h1>Update Student</h1>
      <form onSubmit={(e)=>{UpdateStudentdetails(e);}}>
        <label>Name<input required
            onChange={(e) => {setName(e.target.value);}}></input></label><br />
        <label>Subject<input 
            onChange={(e) => {setSubject(e.target.value);}}></input></label><br />
        <label>Marks<input type="number"
           onChange={(e) => {setMarks(e.target.value);}}></input></label><br />
      <button>Update</button>
    </form>
    </div>
  );
};

export default UpdateStudent;