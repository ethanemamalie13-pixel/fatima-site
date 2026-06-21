const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Serve index.html for all routes
  const filePath = path.join(__dirname, 'public', 'index.html');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading page');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`✅ Fatima Mark Sheet running at http://localhost:${PORT}`);
  console.log(`   Press Ctrl+C to stop the server`);
});
