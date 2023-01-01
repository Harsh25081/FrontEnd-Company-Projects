const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
    Name : {type:String,required:true,trim:true},
    PhoneNumber : {type:Number,required:true},
    Age : {type:Number,required:true},
    Pincode : {type:Number,required:true},
    Password : {type:String,minLen:8,maxLen:15},
    AadharNo : {type:Number,required:true,unique:true},
    VaccinationStatus: {
        type: Object,
        firstDose: {
            type: Object,
            status: { type: String, enum: ["complited", "Pending"] },
            Date: { type: Date }
        },
        seccondDose: {
            type: Object,
            status: { type: String, enum: ["complited", "Pending"] },
            Date: { type: Date }
        }
    },
    VaccinationRegister: {
        type: Object,
        firstDose: {
            type: Object,
            status: { type: String, enum: ["Reject", "Register"] },
            Date: { type: Date },
            timeSlotId:{type:ObjectId, ref:"SlotData"},
            timeSlot:String
        },
        secondDose: {
            type: Object,
            status: { type: String, enum: ["Reject", "Register"] },
            Date: { type: Date },
            timeSlotId:{type:ObjectId, ref:"SlotData"},
            timeSlot:String
        },
    }

})

module.exports = mongoose.model("User",userSchema)