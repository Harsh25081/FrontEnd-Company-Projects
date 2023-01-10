const express = require("express")
const { CreateStudent, getStudents, getStudent, deletestudent, updateStudent } = require("../controllers/studentController")
const { userRegister, login } = require("../controllers/userControllers")
const router = express.Router()

router.post("/test-me",()=>{
    console.log("This is the Test API !!!!")
})

router.post("/register",userRegister)
router.post("/login",login)
router.post("/students",CreateStudent)
router.get("/getallstudents",getStudents)
router.get("/getstudent",getStudent)
router.put("/updatestudent",updateStudent)
router.delete("/deletestudent",deletestudent)


module.exports = router