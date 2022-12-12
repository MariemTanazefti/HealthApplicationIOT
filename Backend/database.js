const mysql = require('mysql2');

/* const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hc',
    password:'',
    //port: 3306
}); */

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hc',
    password:'',
    //port: 3306
});


module.exports = connection.promise();