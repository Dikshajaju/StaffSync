const mongoose = require("mongoose");
const employeeSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    salaryPerDay: {
        type: Number,
    },
    stars: {
        type: Number,
        default: 0,
        max: 5
    },

}, { timestamps: true });
module.exports =  mongoose.model("Employee", employeeSchema);