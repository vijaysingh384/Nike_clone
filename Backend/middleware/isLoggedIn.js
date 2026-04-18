const jwt = require('jsonwebtoken');
const usermodel = require('../models/usermodel');

module.exports = async function (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!token) {
        return res.status(401).json({ success: false, message: "You need to login first" });
    }
    try {
        let decoded = jwt.verify(token, process.env.JWT_KEY);
        let user = await usermodel.findOne({ email: decoded.email }).select("-password");
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};
