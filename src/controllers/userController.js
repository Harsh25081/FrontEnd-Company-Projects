const jwt = require('jsonwebtoken')
const userModel = require("../model/userModel")

exports.UserRegister = async function(req,res){
    try {
        const data = req.body
        const {Name,PhoneNumber,Age,Pincode,AadharNo,Password}=data
        if(!Name || Name.trim()==0)return res.status(400).send({status:false,message:"Pls provide your Name"})
        if(!PhoneNumber)return res.status(400).send({status:false,message:"Pls provide your Phone Number"})
        if(!Age)return res.status(400).send({status:false,message:"Pls provide your Age"})
        if(!Pincode)return res.status(400).send({status:false,message:"Pls provide Pincode"})
        if(!Password)return res.status(400).send({status:false,message:"Pls provide Your Password"})
        if(Password.length<8 || Password.length>15)return res.status(400).send({status:false,messgae:"Pls provide Password of length 8 to 15 only"})
        if(!AadharNo)return res.status(400).send({status:false,message:"Pls provide Your Aadhar No."})
        const isAahdarNoRegistered = await userModel.findOne({AadharNo:AadharNo})
        if(isAahdarNoRegistered)return res.status(400).send({status:false,message:"This Aadhar No is already Registered"})
        const RegisterUser = await userModel.create(data)
        return res.status(201).send({status:true,message:"User Registered Successfully",data:RegisterUser})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

exports.UserLogin = async function(req,res){
    try {
        const data = req.body
        const {PhoneNumber,Password} = data
        if(Object.keys(data).length==0)return res.status(400).send({status:false,message:"Pls provide Your PhoneNo and Password"})
        if(!PhoneNumber)return res.status(400).send({status:false,message:"Pls Provide PhoneNumber"})
        if(!Password)return res.status(400).send({status:false,message:"Pls Provide Password"})
        const isPhoneNoRegistered = await userModel.findOne({PhoneNumber:PhoneNumber})
        if(!isPhoneNoRegistered)return res.status(400).send({status:false,message:"This PhoneNumber is Not Registered"})
        if(isPhoneNoRegistered.Password==Password){
            const token = jwt.sign({
                userId : isPhoneNoRegistered._id.toString()
            },"SecretKey",{expiresIn:"24h"})
            return res.status(200).send({status:true,message:"Login Successfully",token:token})
        }else {return res.status(400).send({status:false,message:"Login Failure Incorrect Password"})}
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}