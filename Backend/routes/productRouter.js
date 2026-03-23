const express = require('express');
const router = express.Router();
const upload = require("../config/multer-config");
const Product = require("../models/Productmodel");

// Create product
router.post('/create', upload.single("image"), async function(req, res){
    try {
        let { name, description , price  } = req.body;
        let product = await Product.create({
            image: req.file ? req.file.buffer : null,
            name,
            description,
            price,
            
        });
        res.status(201).json({ message: "Product created successfully", product });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all products
router.get('/all', async function(req, res){
    try {
        let products = await Product.find();
        let formatted = products.map(p => ({
            _id: p._id,
            name: p.name,
            description: p.description,
            price: p.price,
            
            image: p.image ? `data:image/jpeg;base64,${p.image.toString('base64')}` : null,
        }));
        res.json(formatted);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
