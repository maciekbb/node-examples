const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
app.use(express.static('public'))

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  let i = 0;

  const messageLoop = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(`Message number ${i}`);
    }
    i += 1;
  }, 1000)

  ws.on('close', () => {
    console.log('Clean up...')
    clearInterval(messageLoop)
  })
  
});

server.listen(3000, function listening() {
  console.log('Listening on %d', server.address().port);
});

// TODO message app