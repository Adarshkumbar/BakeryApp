const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const ingredient = require('./routes/ingredients');
const cookie = require('./routes/cookies');
const autoCalc = require('./routes/autoCalc')

// middlewares
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // middleware for form data

// Routes
app.use('/api/ingredients', ingredient);
app.use('/api/cookies', cookie);
app.use('/api/autoCalc', autoCalc);
// app.use('/api/admin/shapes', shapes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch((err) => {
    console.log("error ",err);
});