const express = require('express')
const fs = require('fs')
const app = express();
const port =6500;

app.get('/',(req,res)=>{
    res.send({message:"welcome to movies api",status:200})
})

app.get('/movies',(req,res)=>{
    fs.readFile('db.json',(err,result)=>{
        if(err) throw err;
        res.send(JSON.parse(result))   
   })
})


app.listen(port,()=>{
    console.log("server start with port 6500")
})