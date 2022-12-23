const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require("./userRouter")


//body-parser
app.use(express.json());

//router
app.use("/contact",router)



//mongoose-connected
mongoose.connect("mongodb+srv://dhojay:dhojay@cluster0.ebuwxab.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("I'm connected to database")
    }
    else{
        console.log(err)
    }
})


/*
//server-checking
app.get('/',(req,res)=>{
    res.send('port running on display')
})
*/




//app-listen
app.listen(5000,(req,res)=>{
    console.log("I'm port")
})
