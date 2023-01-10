import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './homePage.css'
import UpdateStudent from "./updateStudent"

const HomePage = ()=>{
    let [books,setBooks]=useState([])
    let [demo,setDemo]=useState("")
    const token = localStorage.getItem("token")
    let navigate = useNavigate();

    const GetAllBooksList = ()=>{
        axios.get("http://localhost:5000/getallstudents",{headers:{'x-api-key':token}})
        .then((response)=>{setBooks(response.data.data);setDemo("Hi there");})
        .catch((err)=>console.log(err.message))
    }

    useEffect(()=>{
        GetAllBooksList();
    })

    // const BookDetails = (title)=>{
    //     navigate("/bookdetails",{title})
    // }

    return (
        <div>
            <h1>This is the Home Page</h1>
            <button onClick={()=>navigate("/createstudent")}>Add a New Book</button>
            <div className="grid" >
            {books.map((book,index)=>{
                let {name,Math,Physics,Biology,Chemistry}=book
                return <div key={index} style={{border:"2px solid black",margin:'5px'}}>
                    <p>Name : {name}</p>
                    <p>Maths : {Math}</p>
                    <p>Physics : {Physics}</p>
                    <p>Biology : {Biology}</p>
                    <p>Chemistry : {Chemistry}</p>
                    <button onClick={()=>{<UpdateStudent demo={demo}/>;navigate('/updatestudent')}}>Edit</button>
                    <button>View</button>
                    <button>Delete</button>
                </div>
            })}
            </div>
        </div>
    )
}

export default HomePage