const { Router } = require('express');
const pool = require('../db');
const router = Router();
const bcrypt = require('bcrypt');


//Add a User Account
const addUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    //Check if Email already exists
    pool.query( "SELECT u FROM users u WHERE u.email = $1", [email],
     (error, results) => {
        if (results.rows.length) {
            res.send("An Account with this Email already exists");
        }
    //Create an Account Record for the User
    pool.query( "INSERT INTO users (first_name, last_name, email, password, created_at) VALUES ($1, $2, $3, $4, NOW()::timestamp)"
    , [first_name, last_name, email, hashedPassword], 
        (error, results) => {
            if (error) throw error;
                res.status(201).send('User Account Added Succesfully');
                // res.redirect('/')
            });
    })
};

router.post('/register', addUser);

module.exports = router;