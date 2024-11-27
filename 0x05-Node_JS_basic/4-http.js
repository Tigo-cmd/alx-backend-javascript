const http = require('http');
/*
* creates a simple http server
*/
const PORT = 1245;
const app = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Listinig on port ${PORT}`);
});

module.exports = app;
