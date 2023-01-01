const mongoose = require('mongoose')

const timeslotSchema = new mongoose.Schema({
    date : {type:String , required:true},
    TotalDoseADay: {type:Number,default:140},
    AvailableDoseADay : {type:Number,default:140},
    slotData: [{
        timeSlot:String,
        totalSlot:Number,
        availableSlot:Number
    }]
})

module.exports = mongoose.model("TimeSlot",timeslotSchema)