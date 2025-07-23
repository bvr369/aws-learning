const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Optional but good practice
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello from Bhanu's EC2 backend!");
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

