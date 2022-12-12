//const db =require('./database')  
const mysql = require('mysql2')
const mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://broker.hivemq.com');


/* let temperature=parseFloat(37.7);
let oxyegene = parseFloat(99);
let freq=parseFloat(80);
let pression=parseFloat(12);
let distance=parseFloat(99);
let OX; */
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hc',
    password:'',
    //port: 3306
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected to database!");
})

 function addTemperature(value) {
    var sql = `INSERT INTO temperature (date, valeur) VALUES ('${new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ")}', ${value})`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Successful temperature ");
    }); 
}
 function addoxygene(value){
    var sql = `INSERT INTO oxygene (date, valeur) VALUES ('${new Date()
        .toISOString()
        .slice(0, 19)
        .replace("O2", " ")}', ${value})`;
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Successful oxygene");
      });
    }
function addfrequence(value){
    var sql = `INSERT INTO frequence (date, valeur) VALUES ('${new Date()
        .toISOString()
        .slice(0, 19)
        .replace("Freq", " ")}', ${value})`;
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Successful frequence");
      });
    }
function addpression(value){
    var sql = `INSERT INTO pression (date, valeur) VALUES ('${new Date()
        .toISOString()
        .slice(0, 19)
        .replace("Pres", " ")}', ${value})`;
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Successful pression");
      });
    }
function addsteps(value){
    var sql = `INSERT INTO steps (date, valeur) VALUES ('${new Date()
        .toISOString()
        .slice(0, 19)
        .replace("Nb steps", " ")}', ${value})`;
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Successful steps");
      });
    }


/* client.on('connect',function()
{   
    client.subscribe("hc/temp");
    client.subscribe("hc/o2");
    client.subscribe("hc/freq");
    client.subscribe("hc/pres");
    client.subscribe("hc/steps");
    print("Receiving...")
}
) */

module.exports = {
   addTemperature,
   addoxygene,
   addfrequence,
   addpression,
   addsteps
    
    }
 