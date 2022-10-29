const mongoose = require('mongoose');

//schema-creation
const UserSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique : true
    },
    city:{
        type : String,
        trim:true
    },
    CreatedAt : {
        type : Date,
        default:Date.now
    }
})


//model-creation

module.exports = mongoose.model("Contact_Data", UserSchema)
