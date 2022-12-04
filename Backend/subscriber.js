const mqtt=require(mqtt)
const db =require('../database')  
const mysql = require('mysql2')
const mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://broker.hivemq.com');
var dateTime = require('node-datetime');

while(true){
    on_message(client,message,function()
 {
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    console.log(formatted);
    sql = "INSERT INTO topics (time_stamp,temp,o2,freq,press,act) VALUES (%s,%s,%s,%s,%s,%s)"
    return db.execute(sql,formatted)



 }
 )


client.on('connect',function()
{
    client.subscribe("hc/temp",0)
    print("Receiving...")
}
)

}
 