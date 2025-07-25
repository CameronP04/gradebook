const express = require('express');
const app = express();
const { Pool } = require('pg');
const path = require('path');

// PostgreSQL settings - UPDATE THIS to match your setup
const pool = new Pool({
  user: 'postgres',         // change this if different
  host: 'localhost',
  database: 'gradebook',    // make sure this database exists
  password: 'yourpassword', // replace with your actual password
  port: 5432
});

// Serve JS files from public folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'gradebook.html'));
});

// Endpoint to send grade data
app.get('/grades', async (req, res) => {
  try {
    const result = await pool.query('SELECT name, course, grade FROM grades;');
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Error retrieving grades');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

