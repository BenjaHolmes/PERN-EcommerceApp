const { Router } = require('express');
const pool = require('../db');
const router = Router();

//Gets All Products
const getProducts = (req, res) => {
    pool.query("SELECT * FROM products", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Gets 4 Random Products to Populate Discover Section
const getRandProducts = (req, res) => {
    const p1 = Math.floor(Math.random() * 60);
    const p2 = Math.floor(Math.random() * 60);
    const p3 = Math.floor(Math.random() * 60);
    const p4 = Math.floor(Math.random() * 60);
    pool.query("SELECT * FROM products WHERE id = $1 OR id = $2 OR id = $3 OR id = $4",
     [p1, p2, p3, p4], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

router.get('/', getProducts);
router.get('/discover', getRandProducts);

module.exports = router;