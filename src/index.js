const express = require('express')
const mongoose = require('mongoose')
const route = require('./route/route')
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://harsh258:Wb5QwC0mG0iUBIXS@new-cluster.baoq1vx.mongodb.net/Arogyasetu_Cowin-DB",{useNewUrlParser:true})
.then(()=>console.log("MongoDB is Connected"))
.catch((err)=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT||3000,()=>{console.log("Express app is running on the PORT "+(process.env.PORT||3000))})