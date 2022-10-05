const express = require('express');
const pool = require('./db');
const app = express();
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use(cors());
app.use(express.json());















app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/reviews', reviewRoutes);



//Starts the Server 
const PORT = process.env.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`)
});