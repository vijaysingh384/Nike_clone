const express = require('express');
const router = express.Router();

const isloggedin = require('../middleware/isLoggedIn');    
router.get("/" ,function (req , res){
     res.json({
        error: req.flash("error")
    });
});

router.get("/Home" , isloggedin , function(req, res){
    res.render('home');
});



module.exports = router;