const express = require('express');
const router = express.Router();

const isloggedin = require('../middleware/isLoggedIn');    
const Productmodel = require('../models/Productmodel');
router.get("/" ,function (req , res){
     res.json({
        error: req.flash({error , loggedin : false})
    });
});

router.get("/shop" , isloggedin , async function(req , res){
    let product = await Productmodel.find();
    res.json("shop")
})

router.get("/Cart" , isloggedin , function(req, res){
    res.render('Cart' , {product});
});



module.exports = router;