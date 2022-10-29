const express = require("express");
const router = express.Router();
const User = require("./userSchema");


//CRUD = C-Create, R-Read, U-Update, D-Delete

//create = post

router.post("/create",async(req,res)=> {
    res.send(req.body)
    var data = new User({
        firstname : req.body.firstname,
        lastname:req.body.lastname,
        phone:req.body.phone,
        email:req.body.email,
        city:req.body.city
    })
    await data.save();
    res.json(data)
});

//Read = get all

router.get("/",async(req,res)=>{
    var all = await User.find()
    res.json(all)
})

// update = put
router.put("/update",async(req,res)=>{
    var update = await User.updateOne({_id:req.body._id},{
        $set:{
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            phone:req.body.phone,
            email:req.body.email,
            city:req.body.city
        }
    })
    res.json(update)
});

//delete
router.delete("/delete/:id", async(req,res)=>{
    console.log(req.params)
    var delData = await User.findByIdAndRemove({_id:req.params.id}).then(()=>{
        res.json("User Delete")
    })
})

module.exports = router;