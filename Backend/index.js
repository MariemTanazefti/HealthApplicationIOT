const express = require("express");
const app = express();
const http = require("http");
var bodyParser = require('body-parser'); 
const WebSocket = require("ws");
const userRoute=require('./routes/routes')
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const mqtt = require("mqtt");
const {addTemperature,addoxygene,addfrequence,addsteps,addpression}= require('./subscriber')

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
var client = mqtt.connect("mqtt://broker.mqttdashboard.com", {
  protocolId: "MQIsdp",
  protocolVersion: 3,
});
client.subscribe("hc/temp");
client.subscribe("hc/o2");
client.subscribe("hc/freq");
client.subscribe("hc/pres");
client.subscribe("hc/steps");
client.on("message", function (topic, message) {
  switch (topic) {
    case "hc/temp":
      addTemperature(message.toString());
      break;
    case "hc/o2":
      addoxygene(message.toString());
      break;
    case "hc/freq":
      addfrequence(message.toString());
      break;
    case "hc/pres":
      addpression(message.toString());
      break;
    case "hc/steps":
      addsteps(message.toString());
      break;
  }
});

client.on("connect", function () {
  console.log("Connected to mqtt broker");
});
app.get("/", function (req, res) {
  res.send("Hello World!");
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