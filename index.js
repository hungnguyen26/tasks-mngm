const express = require("express");
const app = express();
const port = 3000;

app.get("/tasks",(req,res)=>{
    res.send("Danh sách công việc");
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})