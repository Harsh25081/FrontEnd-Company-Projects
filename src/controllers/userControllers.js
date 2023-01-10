const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.userRegister = async (req,res)=>{
    try {
        let data = req.body
        let {name,password}=data
        if(!name)return res.status(400).send({status:false,message:"name is mandatory"})
        if(!password)return res.status(400).send({status:false,message:"password is mandatory"})
        const userRegister = await userModel.create(data)
        res.status(201).send({status:true,data:userRegister})
        
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

exports.login = async (req,res)=>{
    try {
        let data=req.body
        let {name,password}=data
        if(!name)return res.status(400).send({status:false,message:"name is mandatory"})
        if(!password)return res.status(400).send({status:false,message:"password is mandatory"})
        let userexists = await userModel.findOne({name,password})
        if(!userexists)return res.status(404).send({status:false,message:"Incorrect name or password"})
        const token=jwt.sign({
            userId : userexists._id.toString()
        },
        "SecretKey"
        )
        return res.status(200).send({status:true,data:token})

    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}