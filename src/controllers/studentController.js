const studentModel = require("../models/studentModel")

exports.CreateStudent = async (req,res)=>{
    try {
        let name=req.body
        if(!name)return res.status(400).send({status:false,message:"name is mandatory"})
        let keys = Object.keys(req.body)
        let subjectName = keys[1]
        let subject = data[subjectName]
        let obj  = {}
        obj[subjectName] = subject
        let studentexist = await studentModel.findOne({name}).lean()
        if(studentexist){
            let dockeys = Object.keys(studentexist)
            if(dockeys.includes(subjectName)){
                let val = studentexist[subjectName]
                obj[subjectName] = subject+val
            }
            const updateStudent = await studentModel.findOneAndUpdate({name},obj,{new:true})
            return res.status(201).send({status:true,data:updateStudent})
        }
        obj.name=name
        const CreateStudent = await studentModel.create(obj)
        return res.status(201).send({status:true,data:CreateStudent})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

exports.getStudent = async (req,res)=>{
    try {
        let name = req.body
        if(!name)return res.status(400).send({status:false,message:"name is mandatory"})
        let getStudents = await studentModel.findOne(name)
        if(!getStudents)return res.status(404).send({status:false,message:"No student Exists by this name"})
        return res.status(200).send({status:true,data:getStudents})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}
exports.getStudents = async (req,res)=>{
    try {
        let getStudent = await studentModel.find()
        return res.status(200).send({status:true,data:getStudent})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

exports.updateStudent = async (req,res)=>{
    try {
        let data = req.body
        let name=data.name
        if(!name)return res.status(400).send({status:false,message:"name is mandatory"})
        let keys = Object.keys(data)
        let subjectName = keys[1]
        let subject = data[subjectName]
        let obj  = {}
        obj[subjectName] = subject
        let studentexist = await studentModel.findOne({name})
        if(!studentexist)return res.status(404).send({status:false,message:"No student exists with this name"})
        if(studentexist){
            const updateStudent = await studentModel.findOneAndUpdate({name},obj,{new:true})
            return res.status(201).send({status:true,data:updateStudent})
        }
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

exports.deletestudent = async (req,res)=>{
    try {
        let name = req.body.name
        if(!name)return res.status(400).send({status:false,message:"name is mandatory"})
        let deletestudent = await studentModel.deleteOne({name})
        return res.status(200).send({status:true,data:deletestudent})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}