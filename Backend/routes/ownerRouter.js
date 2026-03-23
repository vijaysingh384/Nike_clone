const express = require('express');
const router = express.Router();
const Owner = require('../models/owner-model');
if(process.env.NODE_ENV==="development"){
    router.post('/create' , async function(req, res){
    let owners = await Owner.find();
    if(owners.length > 0){
        return res.status(503).send('Owner already exists');
    }
    let {fullname, email, Password} = req.body;
    let createdowner = await Owner.create({
    fullname,
    email,
    Password,
 
    });

    res.status(201).send(createdowner);
});
}
router.get('/admin' , function(req, res){
    let success = req.flash("success");
    res.json("admin api working" , {success});
});



module.exports = router;