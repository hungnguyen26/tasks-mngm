const express = require("express");
const database = require("./config/database");
const app = express();
const port = 3000;

database.connect();     // kết nối db

app.get("/tasks",(req,res)=>{
    res.send("Danh sách công việc");
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})