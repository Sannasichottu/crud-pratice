const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require("./userRouter")


//body-parser
app.use(express.json());

//router
app.use("/contact",router)



//mongoose-connected
mongoose.connect("mongodb+srv://dhojay:dhojay@cluster0.ije4k7o.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true, useUnifiedTopology:true
},(err) => {
    if(!err){
        console.log("Db Connected")
    }else{
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
