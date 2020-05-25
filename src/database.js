const mysql = require('mysql');


const db_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'company',
});

db_connection.connect(function (error){
    if (error) {
        console.log('Error connecting to BD ', error);
        return;
    }else{
        console.log('DB connected');
    }
});

module.exports = db_connection;