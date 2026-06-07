
const http = require('http');
const fs = require('fs');
const path = require('path');
const file = 'C:/Users/Administrator/Documents/Codex/2026-06-07/files-mentioned-by-the-user-ai/outputs/index.html';
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(fs.readFileSync(file));
}).listen(8000, '0.0.0.0');
console.log('server started');
