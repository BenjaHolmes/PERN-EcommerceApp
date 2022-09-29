const express = require('express');
const pool = require('./db');
const app = express();
const cors = require('cors');



app.get("/api/products", cors(), async (req, res) => {
    pool.query("SELECT * FROM products", (error, results) => {
    res.status(200).json(results.rows);
    });
})

const PORT = process.env.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`)
});