const express = require('express');
const router = express.Router();
const upload = require("../config/multer-config");
const Product = require("../models/Productmodel");

// Create product
router.post('/create', function(req, res, next) {
    upload.single("image")(req, res, function(err) {
        if (err) {
            return res.status(500).json({ error: "Image upload failed: " + err.message });
        }
        next();
    });
}, async function(req, res){
    try {
        let { name, description, price } = req.body;
        let product = await Product.create({
            image: req.file ? req.file.path : null,
            name,
            description,
            price,
        });
        res.status(201).json({ message: "Product created successfully", product });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all products with pagination
router.get('/all', async function(req, res){
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        const skip = (page - 1) * limit;

        const total = await Product.countDocuments();
        const products = await Product.find().skip(skip).limit(limit);

        res.set('Cache-Control', 'no-store');
        res.json({
            products,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            hasMore: page * limit < total,
        });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
