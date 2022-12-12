const { Router } = require('express');
const pool = require('../config/db');
const router = Router();

// Check if a user has a cart, and if not, creates one
const checkCreateCart = (req, res) => {
    const userId = req.params.id;
    pool.query(`SELECT * FROM cart WHERE user_id = $1 AND is_current_cart = true`, 
    [userId],
    (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            const cartId = results.rows[0].id;
            res.send(cartId);    
        } else {
            pool.query(`INSERT INTO cart (is_current_cart, user_id)
            VALUES (true, $1)`, [userId],
            (error, results) => {
                if (error) throw error;
                res.status(201).send('New Cart Created for User');
            })
        }
    })
}

// Get all of a specific users cart items.
const getCartItems = (req, res) => {
    const userId = req.params.id;
    pool.query(`SELECT * FROM cart WHERE user_id = $1 AND is_current_cart = true`,
    [userId],
    (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            const cartId = results.rows[0].id;
            pool.query(`SELECT * FROM cart_item
            JOIN cart ON cart_item.cart_id = cart.id
            JOIN products ON cart_item.product_id = products.id
            WHERE cart_id = $1`, [cartId],
            (error, results) => {
                if (error) throw error;
                if (results.rows) {
                    res.send(results.rows);
                }
            })
        }
    })
}

//Add item to Cart
const addItemToCart = (req, res) => {
    const { user_id, product_id, quantity, item_size } = req.body;
    pool.query(`SELECT * FROM cart WHERE user_id = $1 AND is_current_cart = true`,
    [user_id],
    (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            const cartId = results.rows[0].id;
            pool.query(`INSERT INTO cart_item (product_id, cart_id, quantity, item_size)
            VALUES ($1, $2, $3, $4)`,
            [product_id, cartId, quantity, item_size],
            (error, results) => {
                if (error) throw error;
                res.status(201).send('Item Added to Cart');
            })
        }
    })
}

router.get('/:id', checkCreateCart);
router.get('/items/:id', getCartItems);
router.post('/', addItemToCart);

module.exports = router;