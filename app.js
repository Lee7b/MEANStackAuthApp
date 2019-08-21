const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();
const users = require('./routes/users');

// Connect to database
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to db ' + config.database);
})

// On error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
})

// CORS
app.use(cors());

// Body Parser middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);

// Port
const port = 3000;

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid end point');
});

app.listen(port, () => {
    console.log('server started on port' + port);
});