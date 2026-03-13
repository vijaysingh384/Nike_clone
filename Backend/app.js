const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose-connection');
const ownerRouter = require('./routes/ownerRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const expressSession = require('express-session');
const flash = require('connect-flash');

const cors = require('cors');
app.use(cors());

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// console.log('SESSION SECRET:', process.env.EXPRESS_SESSION_SECRET);

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
}));
app.use(flash());

// app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.use('/owner', ownerRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
