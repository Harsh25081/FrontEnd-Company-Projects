const timeslotModel = require("../model/timeslotModel")
const userModel = require("../model/userModel")

exports.AvailableSlots = async function(req,res){
    try {
        const date = req.body.date
        const AvailableSlots = await timeslotModel.findOne({date})
        return res.status(200).send({status:true,message:AvailableSlots})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}






exports.Booking = async function(req,res){
    try {
        const userId = req.params.userId
        const isValidUser = await userModel.findById(userId)
        if(!isValidUser)return res.status(400).send({status:false,message:"This UserId is not Registered"})
        let data = req.body
        const {timeSlot,date,vaccinationDose}=data
        data.userId = userId
        const isTimeSlotAvailable = await timeslotModel.findOne({date}).select({slotData:1,TotalDoseADay:1,AvailableDoseADay:1,date:1}).lean()
        let slotArr = isTimeSlotAvailable.slotData
        let ind = slotArr.findIndex(x=>x.timeSlot>=timeSlot)
        if(slotArr[ind].AvailableSlot==0)return res.status(400).send({status:false,message:"Given Time Slot is full on this date"})
        let arrind = isTimeSlotAvailable[ind]
        arrind.AvailableDoseADay = AvailableDoseADay-1
        isTimeSlotAvailable.slotData[ind].AvailableSlot = arrind.AvailableSlot-1

        const updateslot = await timeslotModel.findByIdAndUpdate(isTimeSlotAvailable._id,{$set:isTimeSlotAvailable},{new:true})
        console.log(updateslot)
        let obj = {}
        if(vaccinationDose=="SecondDose"){
            if(isValidUser.vaccinationStatus=="none")return res.status(400).send({status:false,message:"You are not eligible for Second Dose, Pls take First Dose"})
            if(isValidUser.vaccinationStatus=="All Completed")return res.status(400).send({status:false,message:"You have taken all your Doses"})
            await timeslotModel.findOneAndUpdate({slotData:{timeSlot}},
                {$inc:{AvailableSlot:-1}},{new:true})
            obj={VaccinationRegister:{vaccinationDose:{date,timeSlot:timeSlot}}}
        }
        obj = {
        }
        // const registeruser = await userModel.findOneAndUpdate({userId},{obj},{new:true})
        // return res.status(201).send({status:true,message:"Booking Successfull",data:Booking})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}