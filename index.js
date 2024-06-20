const express = require("express");
const database = require("./config/database");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

database.connect();     // kết nối db

const Task = require("./model/tasks.model");

app.get("/tasks",async (req,res)=>{
    const tasks = await Task.find({
        deleted:false,
    })
    res.json(tasks);
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})