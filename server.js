const express = require("express")
const app = express()
app.use(express.json())
require('dotenv').config()

app.use("/api",require("./routes/userRoutes"))

//database connection
const connectDb= require("./config/connectDb")
connectDb()

//port configuration
const port= process.env.PORT || 8881
app.listen( port ,()=> console.log("my server is running on port"))