const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import JSON data
const data = require('./data/data.json');

// Serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Serve the Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Serve the API demo page
app.get('/api-demo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'api-demo.html'));
});

// Endpoint to get JSON data
app.get('/data', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
