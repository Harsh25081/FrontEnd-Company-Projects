const timeslotModel = require("../model/timeslotModel")
const { timeSlots } = require("./timeSlotFunctn")

exports.createSlot = async function(req,res){
    try {
        const date = req.body.date
        const data = {slotData:timeSlots(),date:date}
        const slotsData = await timeslotModel.create(data)
        return res.status(201).send({status:true,message:"Success",data:slotsData})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}