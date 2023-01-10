const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    Math: Number,
    Biology: Number,
    Chemistry: Number,
    Physics: Number,
});

module.exports = mongoose.model("student",studentSchema);