const { Router } = require('express');
const pool = require('../config/db');
const router = Router();


// Creates a new Order record based on the items in a completed cart
const createOrder = async (req, res) => {
    const userId = req.params.id;
    pool.query(`SELECT * FROM cart WHERE user_id = $1 AND is_current_cart = true`,
    [userId],
    (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            const cartId = results.rows[0].id;
            pool.query(`INSERT INTO orders (user_id, cart_id, complete, completed_at)
            VALUES ($1, $2, true, NOW()::timestamp)`,
            [userId, cartId],
            (error, results) => {
                if (error) throw error;
                res.status(201).send("Order Created Successfully")
            })
        }
    })
}









router.post('/:id', createOrder);


module.exports = router;