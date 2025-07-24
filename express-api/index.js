// index.js
require('dotenv').config();

const port = process.env.PORT || 3000;
// Use process.env.MONGO_URI, etc.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Bhanu's Express API - Hello Sudharsan 🎯");
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', server: 'running' });
});

app.get("/api/greet", (req, res) => {
  const name = req.query.name || "Guest";
  res.json({ message: `Hello, ${name}!` });
});

app.get("/api/time", (req, res) => {
  const currentTime = new Date().toISOString();
  res.json({ time: currentTime });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

