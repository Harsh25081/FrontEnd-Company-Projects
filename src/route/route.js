const express = require('express')
const { Booking, AvailableSlots } = require('../controllers/bookingController')
const { createSlot } = require('../controllers/slotController')
const { UserRegister, UserLogin } = require('../controllers/userController')
const router = express.Router()

router.get("/test-me",function(req,res){
    res.send("This is the test API.")
})

router.post("/registeruser",UserRegister)
router.post("/login",UserLogin)

router.post("/getAvailableSlots",AvailableSlots)
router.post("/booking/:userId",Booking)

router.post("/createSlot",createSlot)

module.exports = router