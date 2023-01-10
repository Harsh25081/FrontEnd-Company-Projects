const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/route")
const app = express()

app.use(express.json())

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

mongoose.connect("mongodb+srv://harsh258:Wb5QwC0mG0iUBIXS@new-cluster.baoq1vx.mongodb.net/Marks-DB",{useNewUrlParser:true})
.then(()=>console.log("MongoDB is Connected"))
.catch((err)=>console.log(err))

app.use("/",route)

app.listen(process.env.PORT || 5000 , ()=>{console.log("Express app is Runnig on the PORT :"+(process.env.PORT||5000))})