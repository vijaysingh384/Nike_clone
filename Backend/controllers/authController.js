const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usermodel = require("../models/usermodel");
const { generateToken } = require("../utils/GenerateTokens");

module.exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body; //react send this data in req body

    // Check existing user
    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await usermodel.create({
      fullname,
      email,
      password: hashedPassword
    });

    // Generate token
    const token = generateToken(user);
    res.cookie("token", token, {
      httpOnly: true
    });

    // Send response to React
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email
      }
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};



module.exports.loginUser = async function (req , res) {
 
    let {email, password } = req.body;

    let user = await usermodel.findOne({email: email}).select("+password");
    if(!user){
        return res.status(401).json({
          success : false,
          message: "Email or password is incorrect" 
        });
    }

    bcrypt.compare(password , user.password , function(err, result){
        if(result){
           let token =  generateToken(user);
           res.cookie("token" , token , {
            httpOnly: true
           }); 
           return res.status(200).json({
            success: true,
            message: "login successful",
            user: {
              id: user._id,
              fullname: user.fullname,
              email: user.email
            }
           });
        }
        else{
            return res.status(401).json({
              success: false,
              message: "Email or password is incorrect"
            });
        }
    })
}; 

module.exports.logout = function (req , res) {
  res.cookie("token" ,  "");
  res.redirect("/home");
}