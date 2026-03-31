const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const commissionRoutes = require("./routes/commissionRoutes");
const performanceRoutes = require("./routes/performanceRoutes");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/commission", commissionRoutes);
app.use("/api/performance", performanceRoutes);

//db connection
mongoose.connect(process.env.MONGO_URI)
   .then(()=>console.log("DB Connected"))
   .catch(err => console.log(err));

//route testing
app.get("/",(req,res)=>{
    res.send("API is running");
});

//server
app.listen(5000,()=>{
    console.log("Server running on port 5000");
});