const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`HEADERS: ${JSON.stringify(req.headers)}`);

  req.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  req.on('end', () => {
    console.log('No more data in response.');
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("Hello...");
  res.write('...World!\n');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});