const express = require("express");
const app = express();
const http = require("http");
var bodyParser = require('body-parser'); 
const WebSocket = require("ws");
const userRoute=require('./routes/routes')
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message, isBinary) {
    console.log(message.toString(), isBinary);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});
app.use(bodyParser.json());
app.use(express.json());
app.use('/health',userRoute);
app.use((req, res) => {
 res.setHeader('Access-Control-Allow-Origin','GET,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Methods','*');
 res.setHeader('Access-Control-Allow-Headers','Content-type,Authorization');
});
server.listen(8080, () => {
  console.log("Listening to port 8080");
}); 