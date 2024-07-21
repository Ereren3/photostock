const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require("./routes/pageRoute");
const authRoute = require('./routes/authRoute');

const app = express();

//Database connection
mongoose.connect("mongodb://127.0.0.1:27017/PhotoStock");

//Template engine added
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", pageRoute);
app.use("/",authRoute)

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})