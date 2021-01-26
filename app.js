const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Test DB (with sequelize)
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))


const app = express();

app.get('/', (req, res) => {res.send('INDEX')});

// Courses Routes
app.use('/courses', require('./routes/courses'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));


