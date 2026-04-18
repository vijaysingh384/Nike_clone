const express = require('express');
const router = express.Router();

const isloggedin = require('../middleware/isLoggedIn');
const Productmodel = require('../models/Productmodel');
const usermodel = require('../models/usermodel');

router.get("/", function (req, res) {
    res.json({ loggedin: false });
});

router.get("/shop", isloggedin, async function (req, res) {
    try {
        let products = await Productmodel.find();
        res.json({ products });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// GET /cart — fetch user's cart with populated product details
router.get("/cart", isloggedin, async function (req, res) {
    try {
        let user = await usermodel.findOne({ email: req.user.email }).populate("cart.product");
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const subtotal = user.cart
            .filter(item => item.product)
            .reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        const bill = user.cart.length > 0 ? subtotal + 20 : 0;
        res.json({ success: true, cart: user.cart, bill });
    } catch (err) {
        console.error("Cart error:", err);
        res.status(500).json({ success: false, message: err.message });
    }
});

// GET /addtocart/:productid — add product or increment quantity
router.get("/addtocart/:productid", isloggedin, async function (req, res) {
    try {
        let user = await usermodel.findOne({ email: req.user.email });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const productId = req.params.productid;
        const existingItem = user.cart.find(item => item.product && item.product.toString() === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            user.cart.push({ product: productId, quantity: 1 });
        }

        await user.save();
        res.json({ success: true, message: "Added to cart" });
    } catch (err) {
        console.error("Add to cart error:", err);
        res.status(500).json({ success: false, message: err.message });
    }
});

// GET /decreasecart/:productid — decrease quantity or remove if 1
router.get("/decreasecart/:productid", isloggedin, async function (req, res) {
    try {
        let user = await usermodel.findOne({ email: req.user.email });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const productId = req.params.productid;
        const itemIndex = user.cart.findIndex(item => item.product.toString() === productId);

        if (itemIndex === -1) return res.status(404).json({ success: false, message: "Item not in cart" });

        if (user.cart[itemIndex].quantity > 1) {
            user.cart[itemIndex].quantity -= 1;
        } else {
            user.cart.splice(itemIndex, 1);
        }

        await user.save();
        res.json({ success: true, message: "Cart updated" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// GET /removecart/:productid — remove product entirely
router.get("/removecart/:productid", isloggedin, async function (req, res) {
    try {
        let user = await usermodel.findOne({ email: req.user.email });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const productId = req.params.productid;
        user.cart = user.cart.filter(item => item.product.toString() !== productId);

        await user.save();
        res.json({ success: true, message: "Item removed from cart" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
