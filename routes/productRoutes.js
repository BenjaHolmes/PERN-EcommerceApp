const { Router } = require('express');
const pool = require('../db');
const router = Router();

const getProducts = (req, res) => {
    pool.query("SELECT * FROM products", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

router.get('/', getProducts);

module.exports = router;