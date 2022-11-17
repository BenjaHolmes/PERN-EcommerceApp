// Required Modules ----------------------------------------------------------

const express = require('express');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcryptjs');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Middleware ---------------------------------------------------------------
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    preflightContinue: true
}));

const store = new session.MemoryStore();
app.use (
    session ({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: { 
            sameSite: false,
            secure: false,
            maxAge: 300000000
        },
        store,
    })
);

// Passport Config ----------------------------------------------------------
require('./config/passportConfig');
app.use(passport.initialize());
app.use(passport.session());

app.post('/auth/login', passport.authenticate('local'), (req, res, next) => {
    res.send(req.user);
});








// Route Handlers ----------------------------------------------------------
app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/reviews', reviewRoutes);



// Server Setup  -----------------------------------------------------------
const PORT = process.env.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`)
});