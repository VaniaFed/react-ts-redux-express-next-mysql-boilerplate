const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'VaniaFedyakov90093',
    database: 'online_programming_school'
});

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected!');
    }
});

module.exports = connection;
